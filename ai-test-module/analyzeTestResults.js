const axios = require('axios');

const OPENAI_API_KEY = 'openia_api_key'; // Replace with your OpenAI API key
const testResults = [
  { test: 'should get weather by city name', status: 'passed' },
  { test: 'should return 404 for invalid city name', status: 'failed', error: 'City not found' },
  { test: 'should get weather by coordinates', status: 'passed' },
  { test: 'should return 401 for invalid API key', status: 'failed', error: 'Unauthorized' },
];

async function analyzeTestResults(results) {
  const prompt = `
    Analyze the following test results and provide insights:
    ${JSON.stringify(results, null, 2)}

    Include:
    - A summary of the test performance (e.g., pass/fail rate).
    - Common patterns in failures.
    - Suggestions for improvement.
  `;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: 200,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('AI Analysis:\n', response.data.choices[0].text.trim());
  } catch (error) {
    console.error('Error analyzing test results:', error.response?.data || error.message);
  }
}

analyzeTestResults(testResults);
