const axios = require('axios');
const fs = require('fs');

// Read the generated test cases from the file
const generatedConfig = JSON.parse(fs.readFileSync('./test-configuration/aiTestConfig.json', 'utf-8'));

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'; // Base URL for the OpenWeatherMap API

describe('AI-Generated OpenWeatherMap API Tests', () => {
  generatedConfig.testCases.forEach((testCase, index) => {
    test(`${index + 1}: ${testCase.description}`, async () => {
      try {
        const response = await axios.get(BASE_URL, { params: testCase.params });

        // Response status should match the expected status
        expect(response.status).toBe(testCase.expectedStatus);

        // If the test case expects a successful response, verify the response
        if (testCase.expectedStatus === 200) {
          expect(response.data).toBeDefined();
          expect(response.data.weather).toBeDefined();
        }
      } catch (error) {
        if (error.response) {
          // Verify the response status code
          expect(error.response.status).toBe(testCase.expectedStatus);
        } else {
          throw new Error('Unexpected error: ' + error.message);
        }
      }
    });
  });
});
