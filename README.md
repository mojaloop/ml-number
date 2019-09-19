# ml-number
[![Git Commit](https://img.shields.io/github/last-commit/mojaloop/ml-number.svg?style=flat)](https://github.com/mojaloop/ml-number/commits/master)
[![Git Releases](https://img.shields.io/github/release/mojaloop/ml-number.svg?style=flat)](https://github.com/mojaloop/ml-number/releases)
[![Npm Version](https://img.shields.io/npm/v/@mojaloop/ml-number.svg?style=flat)](https://www.npmjs.com/package/@mojaloop/ml-number)
[![NPM Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@mojaloop/ml-number.svg?style=flat)](https://www.npmjs.com/package/@mojaloop/ml-number)
[![CircleCI](https://circleci.com/gh/mojaloop/ml-number.svg?style=svg)](https://circleci.com/gh/mojaloop/ml-number)

Mojaloop Number Library implementation that handles decimal processing of amounts/numbers

## Getting Started

To use the ml-number library you need to add it as a dependency to your project with the following:
```$xslt
npm install @mojaloop/ml-number
```

### Usage

To create a new instance of the MlNumber class(returns instance of MlNumber):
```javascript 1.8
const MlNumber = require('@mojaloop/ml-number')
const mlNumber = new MlNumber(6) // can be instantiated with a number
const mlNumber2 = new MlNumber('6') // can be instantiated with a string
const mlNumber3 = new MlNumber(mlNumber2) // can be instantiated with a MlNumber
```

Use different function(returns new instance of new MlNumber):
```javascript 1.8
const MlNumber = require('@mojaloop/ml-number')

const originalValue = new MlNumber(6) // = "{"MlNumber": "6"}"

const additionResult = originalValue.add(12) // = "{"MlNumber": "18"}"

const multiplyResult = originalValue.multiply('12') // = "{"MlNumber": "72"}"

const divisionResult = originalValue.divide(2) // = "{"MlNumber": "3"}"

const subtractionResult = originalValue.subtract('2') // = "{"MlNumber": "4"}"

const mixedFunctionsValuesResult = new MlNumber('2').add(originalValue).sumList([additionResult, 5]) // = "{"MlNumber": "31"}"

const differentFunctionsResult = originalValue.add(2).multiply(3).divide(2).subtract(2) // = "{"MlNumber": "10"}"

const sumListResult = originalValue.sumList([2,3]) // = "{"MlNumber": "11"}"

const toStringResult = additionResult.toString() // = "18"

const toNumberResult = multiplyResult.toNumber() // = 72

const toFixedResult = divisionResult.toFixed() // = "3.0000"

const toFixedWithDecimalPlaceResult = subtractionResult.toFixed(7) // = "4.0000000"
```

## Running the tests

To run the unit tests locally 
```$xslt
npm test
```

To run the test coverage tests locally 
```$xslt
npm run test:coverage
```
