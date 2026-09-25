"""Regression checks for the production handoff validator."""

import copy
import unittest

from validate_plan import validate


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
        self.assertTrue(any("unknown reference: Image2" in error for error in errors))

    def test_rejects_non_numeric_duration(self):
        plan = copy.deepcopy(BASE_PLAN)
        plan["duration_seconds"] = True
        self.assertEqual(validate(plan), ["duration_seconds must be a positive finite number"])


if __name__ == "__main__":
    unittest.main()
