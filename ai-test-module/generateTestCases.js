const axios = require('axios');
const fs = require('fs');

const OPENAI_API_KEY = "openai_api_key"; // Replace with your OpenAI API key
const OUTPUT_FILE = '../test-configuration/aiTestConfig.json'; // AI Test Config file

async function generateTestCases() {
  const prompt = `
    Generate 5 test cases for the OpenWeatherMap API 'Current Weather Data' endpoint.
    Include:
    - Valid city names.
    - Invalid city names.
    - Valid geographic coordinates.
    - Invalid geographic coordinates.
    - At least one test with an invalid API key.
    Return the output as a JSON object with this format:
    {
      "testCases": [
        { "description": "Test description", "params": {}, "expectedStatus": <status_code> }
      ]
    }
  `;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'gpt-4o-mini',
        prompt: prompt,
        max_tokens: 300,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // Parse the generated JSON from OpenAI
    const generatedCases = JSON.parse(response.data.choices[0].text);

    // Save to the output file
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(generatedCases, null, 2));
    console.log(`Test cases generated and saved to ${OUTPUT_FILE}`);
  } catch (error) {
    console.error('Error generating test cases:', error.response?.data || error.message);
  }
}

generateTestCases();
