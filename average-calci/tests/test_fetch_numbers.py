import unittest
from services.fetch_numbers import fetch_numbers

class TestFetchNumbers(unittest.TestCase):
    def test_fetch_numbers(self):
        ids = "p,e,f,r"
        numbers = fetch_numbers(ids)
        self.assertIsInstance(numbers, list)

if __name__ == '__main__':
    unittest.main()
