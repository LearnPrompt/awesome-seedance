"""Regression checks for the production handoff validator."""

import copy
import json
import pathlib
import subprocess
import sys
import tempfile
import unittest

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))

from validate_plan import validate

SCRIPT = pathlib.Path(__file__).resolve().parent / "validate_plan.py"


BASE_PLAN = {
    "duration_seconds": 6,
    "references": [{"id": "Image1", "role": "identity"}],
    "shots": [
        {
            "id": 1,
            "start": 0,
            "end": 3,
            "action": "approach the door",
            "camera": "wide",
            "audio": "footsteps",
            "entry_state": "outside",
            "exit_state": "at the door",
            "references": ["Image1"],
        },
        {
            "id": 2,
            "start": 3,
            "end": 6,
            "action": "open the door",
            "camera": "medium",
            "audio": "door handle",
            "entry_state": "at the door",
            "exit_state": "inside",
            "references": ["Image1"],
        },
    ],
}


class ValidatePlanTest(unittest.TestCase):
    def test_valid_handoff(self):
        self.assertEqual(validate(BASE_PLAN), [])

    def test_rejects_timing_gap_and_unknown_reference(self):
        plan = copy.deepcopy(BASE_PLAN)
        plan["shots"][1]["start"] = 4
        plan["shots"][1]["references"] = ["Image2"]
        errors = validate(plan)
        self.assertTrue(any("expected 3" in error for error in errors))
        self.assertTrue(any("unknown reference: 'Image2'" in error for error in errors))

    def test_reports_fields_even_when_timing_is_broken(self):
        plan = copy.deepcopy(BASE_PLAN)
        plan["shots"][0]["start"] = True
        del plan["shots"][0]["camera"]
        errors = validate(plan)
        self.assertIn("shot 1 start/end must be finite numbers", errors)
        self.assertIn("shot 1 needs camera", errors)
        self.assertFalse(any("shot 2 starts at" in error for error in errors))

    def test_rejects_unused_declared_reference(self):
        plan = copy.deepcopy(BASE_PLAN)
        plan["references"].append({"id": "Image2", "role": "prop"})
        self.assertEqual(validate(plan), ["reference 'Image2' is declared but no shot uses it"])

    def test_rejects_non_numeric_duration(self):
        plan = copy.deepcopy(BASE_PLAN)
        plan["duration_seconds"] = True
        self.assertEqual(validate(plan), ["duration_seconds must be a positive finite number"])

    def test_rejects_structural_errors(self):
        def errors_for(mutate):
            plan = copy.deepcopy(BASE_PLAN)
            mutate(plan)
            return validate(plan)

        def has(errors, text):
            return any(text in e for e in errors)

        self.assertEqual(errors_for(lambda p: p.update(references="x")), ["references must be a list"])
        self.assertTrue(has(errors_for(lambda p: p["references"].append({"id": "Image1"})), "duplicate reference id: 'Image1'"))
        self.assertTrue(has(errors_for(lambda p: p["references"].append({"id": "  "})), "reference 2 needs a nonempty id"))
        self.assertEqual(errors_for(lambda p: p.update(shots=[])), ["shots must be a nonempty list"])
        self.assertTrue(has(errors_for(lambda p: p["shots"][0].update(start=1)), "shot 1 starts at 1, expected 0.0"))
        self.assertTrue(has(errors_for(lambda p: p["shots"][0].update(end=0)), "shot 1 end must exceed start"))
        self.assertTrue(has(errors_for(lambda p: p["shots"][1].update(start=True)), "shot 2 start/end must be finite numbers"))
        self.assertTrue(has(errors_for(lambda p: p["shots"][0].update(camera="  ")), "shot 1 needs camera"))
        self.assertTrue(has(errors_for(lambda p: p["shots"][0].update(references="Image1")), "shot 1 references must be a list of IDs"))
        self.assertTrue(has(errors_for(lambda p: p["shots"][1].update(id=3)), "shot 2 id must be 2"))
        self.assertTrue(has(errors_for(lambda p: p.update(duration_seconds=7)), "shots end at 6, expected duration 7"))
        self.assertTrue(has(errors_for(lambda p: p["shots"].__setitem__(0, "x")), "shot 1 must be an object"))

    def test_rejects_bool_and_float_shot_ids(self):
        for bad_id in (True, 1.0):
            plan = copy.deepcopy(BASE_PLAN)
            plan["shots"][0]["id"] = bad_id
            self.assertIn("shot 1 id must be 1", validate(plan))

    def test_rejects_oversized_integers(self):
        huge = int("1" + "0" * 400)
        plan = copy.deepcopy(BASE_PLAN)
        plan["duration_seconds"] = huge
        self.assertEqual(validate(plan), ["duration_seconds must be a positive finite number"])
        plan = copy.deepcopy(BASE_PLAN)
        plan["shots"][0]["end"] = huge
        self.assertIn("shot 1 start/end must be finite numbers", validate(plan))

    def test_rejects_zero_negative_and_nonfinite_duration(self):
        for bad in (0, -1, None, "6", float("nan"), float("inf")):
            with self.subTest(bad=bad):
                plan = copy.deepcopy(BASE_PLAN)
                plan["duration_seconds"] = bad
                self.assertEqual(validate(plan), ["duration_seconds must be a positive finite number"])

    def test_rejects_bad_reference_entries(self):
        plan = copy.deepcopy(BASE_PLAN)
        plan["references"] = ["x", {"id": 5}, {"id": "  "}]
        for shot in plan["shots"]:
            shot["references"] = []
        self.assertEqual(
            validate(plan),
            [
                "reference 1 needs a nonempty id",
                "reference 2 needs a nonempty id",
                "reference 3 needs a nonempty id",
            ],
        )
        plan = copy.deepcopy(BASE_PLAN)
        plan["shots"][0]["references"] = [1]
        self.assertEqual(validate(plan), ["shot 1 references must be a list of IDs"])

    def test_truncates_long_reference_ids_in_messages(self):
        plan = copy.deepcopy(BASE_PLAN)
        plan["shots"][0]["references"] = ["R" * 120]
        errors = validate(plan)
        self.assertEqual(len(errors), 1)
        prefix = "shot 1 uses unknown reference: "
        self.assertTrue(errors[0].startswith(prefix))
        quoted = errors[0][len(prefix):]
        self.assertTrue(quoted.endswith("..."))
        self.assertLessEqual(len(quoted), 80)

    def test_accepts_fractional_boundaries(self):
        shots = []
        # Offsets below abs_tol=1e-6 must still chain; this exercises the isclose path, not ==.
        for i, (start, end) in enumerate([(0, 0.1), (0.1 + 1e-9, 0.2), (0.2, 0.3)], 1):
            shots.append(
                {
                    "id": i,
                    "start": start,
                    "end": end,
                    "action": "act",
                    "camera": "cam",
                    "audio": "aud",
                    "entry_state": "in",
                    "exit_state": "out",
                    "references": ["Image1"],
                }
            )
        plan = {"duration_seconds": 0.3 + 1e-9, "references": [{"id": "Image1"}], "shots": shots}
        self.assertEqual(validate(plan), [])


class CliTest(unittest.TestCase):
    def run_cli(self, *args):
        return subprocess.run([sys.executable, str(SCRIPT), *args], capture_output=True, text=True)

    def test_cli_exit_codes(self):
        with tempfile.TemporaryDirectory() as tmp:
            tmp_path = pathlib.Path(tmp)

            self.assertEqual(self.run_cli().returncode, 2)
            self.assertEqual(self.run_cli(str(tmp_path / "missing.json")).returncode, 2)

            array_file = tmp_path / "array.json"
            array_file.write_text("[]", encoding="utf-8")
            self.assertEqual(self.run_cli(str(array_file)).returncode, 2)

            broken_file = tmp_path / "broken.json"
            broken_file.write_text("{not json", encoding="utf-8")
            result = self.run_cli(str(broken_file))
            self.assertEqual(result.returncode, 2)
            self.assertIn("cannot read plan", result.stderr)

            binary_file = tmp_path / "binary.json"
            binary_file.write_bytes(b'{"duration_seconds": 6, "x": "\xe9"}')
            result = self.run_cli(str(binary_file))
            self.assertEqual(result.returncode, 2)
            self.assertIn("cannot read plan", result.stderr)

            good_file = tmp_path / "good.json"
            good_file.write_text(json.dumps(BASE_PLAN), encoding="utf-8")
            result = self.run_cli(str(good_file), str(good_file))
            self.assertEqual(result.returncode, 2)
            self.assertIn("usage:", result.stderr)
            result = self.run_cli(str(good_file))
            self.assertEqual(result.returncode, 0)
            self.assertIn("OK", result.stdout)

            bad_plan = copy.deepcopy(BASE_PLAN)
            bad_plan["duration_seconds"] = 7
            bad_file = tmp_path / "bad.json"
            bad_file.write_text(json.dumps(bad_plan), encoding="utf-8")
            result = self.run_cli(str(bad_file))
            self.assertEqual(result.returncode, 1)
            self.assertIn("expected duration 7", result.stderr)
            lines = [line for line in result.stderr.splitlines() if line.strip()]
            self.assertTrue(lines)
            self.assertTrue(all(line.startswith("- ") for line in lines), lines)


if __name__ == "__main__":
    unittest.main()
