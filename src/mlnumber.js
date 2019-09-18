/*****
 License
 --------------
 Copyright © 2017 Bill & Melinda Gates Foundation
 The Mojaloop files are made available by the Bill & Melinda Gates Foundation under the Apache License, Version 2.0 (the "License") and you may not use these files except in compliance with the License. You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, the Mojaloop files are distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

 Contributors
 --------------
 This is the official list of the Mojaloop project contributors for this file.
 Names of the original copyright holders (individuals or organizations)
 should be listed with a '*' in the first column. People who have
 contributed from an organization can be listed under the organization
 that actually holds the copyright for their contributions (see the
 Gates Foundation organization for an example). Those individuals should have
 their names indented and be marked with a '-'. Email address can be added
 optionally within square brackets <email>.

 * Gates Foundation
 - Name Surname <name.surname@gatesfoundation.com>

 * ModusBox
 - Rajiv Mothilal <rajiv.mothilal@modusbox.com>

 --------------
 ******/
'use strict'

const BigNumber = require('bignumber.js')

/**
 * MlNumber class for performing
 *
 * Once you instantiate this class, a MlNumber object will be returned.
 *
 * @example
 * let mlNumber = new MlNumber(6)
 *
 * @param {string/number/MlNumber} value - value to be transposed to MlNumber
 * @constructor
 */
class MlNumber {
  constructor(value = 0) {
    this.MlNumber = new BigNumber(value)
  }

  /**
   * @function sumList
   *
   * @description Adds a list of numbers to a MlNumber
   *
   * @param {array} values Array of values can be string and or number and or MlNumber values
   *
   * @return {MlNumber} - Returns a new MlNumber object and return a new Instance of MlNumber
   */
  sumList(values) {
    return new MlNumber(this.MlNumber.plus(values.reduce((a, b) => {
      return new MlNumber(a).add(b)
    })))
  }

  /**
   * @function add
   *
   * @description Adds a number to a MlNumber
   *
   * @param {string/number/MlNumber} addition - add value to MlNumber
   *
   * @return {MlNumber} - Returns a MlNumber object and return a new Instance of MlNumber
   */
  add(addition) {
    return new MlNumber(this.MlNumber.plus(addition))
  }

  /**
   * @function multiply
   *
   * @description Multiplies a number and a MlNumber
   *
   * @param {string/number/MlNumber} product - multiply value and a MlNumber
   *
   * @return {MlNumber} - Returns a MlNumber object and return a new Instance of MlNumber
   */
  multiply(product) {
    return new MlNumber(this.MlNumber.multipliedBy(product))
  }

  /**
   * @function subtract
   *
   * @description Subtracts a number from a MlNumber
   *
   * @param {string/number/MlNumber} difference - difference to be removed from a MlNumber
   *
   * @return {MlNumber} - Returns a MlNumber object and return a new Instance of MlNumber
   */
  subtract(difference) {
    return new MlNumber(this.MlNumber.minus(difference))
  }

  /**
   * @function divide
   *
   * @description Divides a MlNumber by a value
   *
   * @param {string/number/MlNumber} denominator - Divides and MlNumber by a value
   *
   * @return {MlNumber} - Returns a MlNumber object and return a new Instance of MlNumber
   */
  divide(denominator) {
    return new MlNumber(this.MlNumber.dividedBy(denominator))
  }

  /**
   * @function toString
   *
   * @description Converts MlNumber to string representation
   *
   * @return {string} - Returns string value from MlNumber object
   */
  toString() {
    return this.MlNumber.valueOf()
  }

  /**
   * @function toNumber
   *
   * @description Converts MlNumber to number representation
   *
   * @return {number} - Returns number value from MlNumber object
   */
  toNumber() {
    return this.MlNumber.toNumber()
  }

  /**
   * @function toFixed
   *
   * @description Converts MlNumber to pretty string with decimal points
   *
   * @param {number} decimalPlaces - number of decimal points
   * @param roundingMode - rounding mode i.e ROUND_UP, ROUND_DOWN etc
   *
   * @return {string} - Returns pretty string value with decimal points and rounding from MlNumber object
   */
  toFixed (decimalPlaces = 4, roundingMode = BigNumber.ROUND_UP) {
    return this.MlNumber.toFixed(decimalPlaces, roundingMode)
  }
}

module.exports = {
  MlNumber
}
