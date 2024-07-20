import unittest
from services.number_storage import update_stored_numbers, get_stored_numbers

class TestNumberStorage(unittest.TestCase):
    def test_update_stored_numbers(self):
        update_stored_numbers([1, 2, 3])
        self.assertEqual(get_stored_numbers(), [1, 2, 3])

if __name__ == '__main__':
    unittest.main()
