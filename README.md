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

To create a new instance of the MLNumber class(returns instance of MLNumber):

```javascript 1.8
const MLNumber = require('@mojaloop/ml-number')
const mlNumber = new MLNumber(6) // can be instantiated with a number
const mlNumber2 = new MLNumber('6') // can be instantiated with a string
const mlNumber3 = new MLNumber(mlNumber2) // can be instantiated with a MLNumber
```

Use different function(returns new instance of new MLNumber):

```javascript 1.8
const MLNumber = require('@mojaloop/ml-number')

const originalValue = new MLNumber(6) // = "{"MLNumber": "6"}"

const additionResult = originalValue.add(12) // = "{"MLNumber": "18"}"

const multiplyResult = originalValue.multiply('12') // = "{"MLNumber": "72"}"

const divisionResult = originalValue.divide(2) // = "{"MLNumber": "3"}"

const subtractionResult = originalValue.subtract('2') // = "{"MLNumber": "4"}"

const mixedFunctionsValuesResult = new MLNumber('2').add(originalValue).sumList([additionResult, 5]) // = "{"MLNumber": "31"}"

const differentFunctionsResult = originalValue.add(2).multiply(3).divide(2).subtract(2) // = "{"MLNumber": "10"}"

const sumListResult = originalValue.sumList([2,3]) // = "{"MLNumber": "11"}"

const toStringResult = additionResult.toString() // = "18"

const toNumberResult = multiplyResult.toNumber() // = 72

const toFixedResult = divisionResult.toFixed() // = "3.0000"

const toFixedWithDecimalPlaceResult = subtractionResult.toFixed(7) // = "4.0000000"

const shifted = new MLNumber('0123').shiftedBy(-4) // = "{"MLNumber": "0.0123"}"
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

## Automated Releases

As part of our CI/CD process, we use a combination of CircleCI, standard-version
npm package and github-release CircleCI orb to automatically trigger our releases
and image builds. This process essentially mimics a manual tag and release.

On a merge to master, CircleCI is configured to use the mojaloopci github account
to push the latest generated CHANGELOG and package version number.

Once those changes are pushed, CircleCI will pull the updated master, tag and
push a release triggering another subsequent build that also publishes a docker image.

### Potential problems

* There is a case where the merge to master workflow will resolve successfully, triggering
    a release. Then that tagged release workflow subsequently failing due to the image scan,
    audit check, vulnerability check or other "live" checks.

    This will leave master without an associated published build. Fixes that require
    a new merge will essentially cause a skip in version number or require a clean up
    of the master branch to the commit before the CHANGELOG and bump.

    This may be resolved by relying solely on the previous checks of the
    merge to master workflow to assume that our tagged release is of sound quality.
    We are still mulling over this solution since catching bugs/vulnerabilities/etc earlier
    is a boon.

* It is unknown if a race condition might occur with multiple merges with master in
    quick succession, but this is a suspected edge case.

## Additional Notes

n/a
