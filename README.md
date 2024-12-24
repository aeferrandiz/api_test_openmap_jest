# OpenWeatherMap API Test Suite

This project is a suite of automated tests for the OpenWeatherMap API. It includes statically configured manual tests and dynamically generated test cases using artificial intelligence (AI) via the OpenAI API.

## Project Structure

```
── 📁api_test_openmap_jest
    └── 📁ai-test-module
        └── aiWeather.test.js               # AI Test Script
        └── analyzeTestResults.js           # HTML report for AI-generated tests
        └── generateTestCases.js            # AI Test case Generator
    └── 📁test-configuration
        └── aiTestConfig.json               # Dynamically generated test cases and params
        └── testConfig.json                 # Configuration for regular tests cases and params
    └── 📁test-report
        └── weather-api-test-report.html    # Report for regular tests (optional)
    └── 📁tests
        └── weather.test.js                 # Manually configured regular tests
    └── .gitignore
    └── jest.aiGenerated.config.js          # Jest configuration for AI-generated tests
    └── jest.config.js                      # Jest configuration for regular tests
    └── LICENSE                             # Distribution Licences
    └── package-lock.json                   # Project package information
    └── package.json                        # Project configuration
    └── README.md                           # Project documentation
    └── TESTPLAN.md                         # Project Test plan
```

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/aeferrandiz/api_test_openmap_jest.git
   cd openweathermap-api-tests
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

### API Keys

- **OpenWeatherMap API**:
  - Replace the `apiKey` in `testConfig.json` and `aiTestConfig.json` with your valid OpenWeatherMap API key.

- **OpenAI API** (for generating test cases):
  - Replace `openia_api_key` in the `generateTestCases.js` file with your valid OpenAI API key.

### Configuration Files

- **`testConfig.json`**: Contains configuration data for regular tests.
- **`aiTestConfig.json`**: File where dynamically generated test cases are stored.

## Available Scripts

### Run Regular Tests
Run manually configured tests:
```bash
npm run test
```

### Generate Dynamic Test Cases
Generate dynamic test cases using OpenAI:
```bash
node generateTestCases.js
```
Generated test cases will be saved in `aiTestConfig.json`.

### Run AI-Generated Tests
Run dynamically generated test cases:
```bash
npm run test:ai
```
This will generate an HTML report in `test-report/ai-generated-test-report.html`.

## Reports

- **Regular Tests**:
  - A report (if configured) will be generated in `test-report/`.

- **AI-Generated Tests**:
  - An HTML report will be generated in `test-report/ai-generated-test-report.html`.
  - Open this file in your browser to view the results.

## Customization

- Modify the `generateTestCases.js` file to adjust the prompt sent to OpenAI and generate different test cases.
- Change output paths or Jest configurations in the configuration files (`jest.aiGenerated.config.js`, `package.json`) as needed.

## Dependencies

- [Axios](https://github.com/axios/axios): For making HTTP requests.
- [Jest](https://jestjs.io/): Testing framework.
- [jest-html-reporter](https://github.com/Hargne/jest-html-reporter): For generating HTML reports.
- [openia](https://platform.openai.com/docs/overview): for AI integration under gpt-4o-mini model

## Usage Example

1. Generate dynamic test cases:
   ```bash
   node generateTestCases.js
   ```

2. Run generated tests:
   ```bash
   npm run test:ai
   ```

3. View the results:
   - Open the file `test-report/ai-generated-test-report.html` in your browser.

## License

This project is licensed under the [Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/).

**Under the following terms:**
- **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made.
- **NonCommercial** — You may not use the material for commercial purposes.
