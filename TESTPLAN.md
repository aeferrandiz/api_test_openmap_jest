# Test Plan: OpenWeatherMap API Test Cases

## Overview
This test plan outlines the approach for validating four key test cases for the OpenWeatherMap API. The objective is to ensure that the API behaves as expected when provided with various input scenarios, including valid and invalid requests.

## Scope
The test cases cover:
- Valid requests using city names and coordinates.
- Error handling for invalid city names and API keys.

## Test Environment
- **API Endpoint**: `http://api.openweathermap.org/data/2.5/weather`
- **Required Parameters**: `q` (city name), `lat` (latitude), `lon` (longitude), `appid` (API key)
- **Test Tool**: Automated tests using Jest and Axios.

---

## Test Cases

### Test Case 1: Valid Weather Request by City Name
- **Objective**: Verify that the API returns the correct weather data for a valid city name.
- **Test Description**: Provide a valid city name ("Paris") and a valid API key. Validate that the response contains the correct HTTP status and weather data.
- **Input Parameters**:
  - `q`: "Paris"
  - `appid`: `your_api_key`
- **Expected Result**:
  - HTTP Status: `200`
  - Response Body: Contains weather information and city details.
- **Validation Criteria**:
  - Status code is 200.
  - `weather` object is present in the response body.

---

### Test Case 2: Weather Request with Invalid City Name
- **Objective**: Verify that the API handles requests for invalid city names appropriately.
- **Test Description**: Provide an invalid city name ("InvalidCity") and a valid API key. Validate that the API returns the correct error status.
- **Input Parameters**:
  - `q`: "InvalidCity"
  - `appid`: `your_api_key`
- **Expected Result**:
  - HTTP Status: `404`
  - Response Body: Error message indicating that the city was not found.
- **Validation Criteria**:
  - Status code is 404.
  - Error message includes "city not found" or similar.

---

### Test Case 3: Valid Weather Request by Coordinates
- **Objective**: Verify that the API returns correct weather data for valid geographic coordinates.
- **Test Description**: Provide valid latitude (48.8566) and longitude (2.3522) for Paris, along with a valid API key. Validate the response.
- **Input Parameters**:
  - `lat`: `48.8566`
  - `lon`: `2.3522`
  - `appid`: `your_api_key`
- **Expected Result**:
  - HTTP Status: `200`
  - Response Body: Contains weather information and geographic details.
- **Validation Criteria**:
  - Status code is 200.
  - `weather` object is present in the response body.

---

### Test Case 4: Request with Invalid API Key
- **Objective**: Verify that the API rejects requests with invalid API keys.
- **Test Description**: Provide a valid city name ("Paris") but an invalid API key. Validate that the API returns the correct error status.
- **Input Parameters**:
  - `q`: "Paris"
  - `appid`: `invalid_api_key`
- **Expected Result**:
  - HTTP Status: `401`
  - Response Body: Error message indicating that the API key is invalid.
- **Validation Criteria**:
  - Status code is 401.
  - Error message includes "unauthorized" or similar.

---

## Testing Strategy

1. **Test Execution**:
   - Use an automated test suite implemented in Jest and Axios.
   - Run each test case independently to verify behavior against expected results.

2. **Data Validation**:
   - Validate HTTP status codes.
   - Inspect response bodies for required fields and error messages.

3. **Error Handling**:
   - Ensure all edge cases are covered, such as missing parameters or invalid values.

4. **Reporting**:
   - Generate an HTML report for test execution using Jest HTML Reporter.

---

## Risks and Mitigation
- **Risk**: Changes to the API may alter expected responses.
  - **Mitigation**: Regularly update test cases to align with API documentation.
- **Risk**: Network instability during tests.
  - **Mitigation**: Retry failed tests up to three times to confirm consistent results.

---

## Deliverables
1. Test scripts implemented in Jest.
2. Test execution report in HTML format.
3. Identified issues and recommendations for improvements.

---

## Conclusion
This test plan ensures comprehensive coverage of critical scenarios for the OpenWeatherMap API. By automating the process and validating key behaviors, we can maintain a high level of confidence in the API's reliability and functionality.

