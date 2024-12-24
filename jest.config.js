module.exports = {
  testMatch: ['**/weather.test.js'], // Verify the execution of the test file
  reporters: [
    'default', // Default reporter
    [
      'jest-html-reporter',
      {
        outputPath: 'test-report/weather-api-test-report.html', // HTML report output path
        pageTitle: 'Weather API Test Report', // Report title
        includeFailureMsg: true,
        includeConsoleLog: true
      }
    ]
  ]
};