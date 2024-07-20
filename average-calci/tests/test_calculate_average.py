import unittest
from services.calculate_average import calculate_average

class TestCalculateAverage(unittest.TestCase):
    def test_calculate_average(self):
        numbers = [1, 2, 3, 4, 5]
        average = calculate_average(numbers)
        self.assertEqual(average, 3.0)

if __name__ == '__main__':
    unittest.main()
