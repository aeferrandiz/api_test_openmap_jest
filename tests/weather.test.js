const axios = require('axios');
const testConfig = require('../test-configuration/testConfig.json'); // Import the test configuration

const BASE_URL = testConfig.api.baseUrl; // Base URL de la API
const API_KEY = testConfig.api.apiKey; // Api Key

describe('OpenWeatherMap API Tests', () => {
  testConfig.testCases.forEach((testCase, index) => {
    test(`${index + 1}: ${testCase.description}`, async () => {
      // Replace the placeholder API key with the actual API key
      const params = {
        ...testCase.params,
        appid: testCase.params.appid === 'your_api_key' ? API_KEY : testCase.params.appid,
      };

      try {
        const response = await axios.get(BASE_URL, { params });

        // Verify that the response status matches the expected status
        expect(response.status).toBe(testCase.expectedStatus);

        // If a test has an expected structure, verify the response
        if (testCase.expectedStatus === 200) {
          expect(response.data).toBeDefined();
          expect(response.data.weather).toBeDefined();
        }
      } catch (error) {
        if (error.response) {
          // Verify that the response status code matches the expected status
          expect(error.response.status).toBe(testCase.expectedStatus);
        } else {
          throw new Error('Unexpected error: ' + error.message);
        }
      }
    });
  });
});
