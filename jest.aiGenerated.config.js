module.exports = {
  testMatch: ['**/aiWeather.test.js'],
  reporters: [
    'default',
    [
      'jest-html-reporter',
      {
          outputPath: '/test-report/ai-generated-test-report.html',
          pageTitle: 'AI-Generated Test Report',
          includeFailureMsg: true,
          includeConsoleLog: true,
      },
    ],
  ],
};
  