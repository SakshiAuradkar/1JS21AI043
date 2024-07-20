import unittest
from app import app

class TestApp(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    def test_calculate_average(self):
        response = self.app.post('/calculate_average', json={"ids": "p,e,f,r"})
        self.assertEqual(response.status_code, 200)
        data = response.get_json()
        self.assertIn("windowPrevState", data)
        self.assertIn("windowCurrState", data)
        self.assertIn("numbers", data)
        self.assertIn("avg", data)

if __name__ == '__main__':
    unittest.main()
