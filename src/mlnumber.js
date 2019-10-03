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
 - Georgi Georgiev <georgi.georgiev@modusbox.com>
 - Rajiv Mothilal <rajiv.mothilal@modusbox.com>

 --------------
 ******/
'use strict'

const BigNumber = require('bignumber.js')

/**
 * MLNumber class for performing
 *
 * Once you instantiate this class, a MLNumber object will be returned.
 *
 * @example
 * let mlNumber = new MLNumber(6)
 *
 * @param {string/number/MLNumber} value - value to be transposed to MLNumber
 * @constructor
 */
class MLNumber {
  constructor (value = 0) {
    this.mlNumber = new BigNumber(value)
  }

  /**
   * @function sumList
   *
   * @description Adds a list of numbers to a MLNumber
   *
   * @param {array} values Array of values can be string and or number and or MLNumber values
   *
   * @return {MLNumber} - Returns a new MLNumber object and return a new Instance of MLNumber
   */
  sumList (values) {
    return new MLNumber(this.mlNumber.plus(values.reduce((a, b) => {
      return new MLNumber(a).add(b)
    })))
  }

  /**
   * @function add
   *
   * @description Adds a number to a MLNumber
   *
   * @param {string/number/MLNumber} addition - add value to MLNumber
   *
   * @return {MLNumber} - Returns a MLNumber object and return a new Instance of MLNumber
   */
  add (addition) {
    return new MLNumber(this.mlNumber.plus(addition))
  }

  /**
   * @function multiply
   *
   * @description Multiplies a number and a MLNumber
   *
   * @param {string/number/MLNumber} product - multiply value and a MLNumber
   *
   * @return {MLNumber} - Returns a MLNumber object and return a new Instance of MLNumber
   */
  multiply (product) {
    return new MLNumber(this.mlNumber.multipliedBy(product))
  }

  /**
   * @function subtract
   *
   * @description Subtracts a number from a MLNumber
   *
   * @param {string/number/MLNumber} difference - difference to be removed from a MLNumber
   *
   * @return {MLNumber} - Returns a MLNumber object and return a new Instance of MLNumber
   */
  subtract (difference) {
    return new MLNumber(this.mlNumber.minus(difference))
  }

  /**
   * @function divide
   *
   * @description Divides a MLNumber by a value
   *
   * @param {string/number/MLNumber} denominator - Divides and MLNumber by a value
   *
   * @return {MLNumber} - Returns a MLNumber object and return a new Instance of MLNumber
   */
  divide (denominator) {
    return new MLNumber(this.mlNumber.dividedBy(denominator))
  }

  /**
   * @function toString
   *
   * @description Converts MLNumber to string representation
   *
   * @return {string} - Returns string value from MLNumber object
   */
  toString () {
    return this.mlNumber.valueOf()
  }

  /**
   * @function toNumber
   *
   * @description Converts MLNumber to number representation
   *
   * @return {number} - Returns number value from MLNumber object
   */
  toNumber () {
    return this.mlNumber.toNumber()
  }

  /**
   * @function toFixed
   *
   * @description Converts MLNumber to pretty string with decimal points
   *
   * @param {number} decimalPlaces - number of decimal points
   * @param roundingMode - rounding mode i.e ROUND_UP, ROUND_DOWN etc
   *
   * @return {string} - Returns pretty string value with decimal points and rounding from MLNumber object
   */
  toFixed (decimalPlaces = 4, roundingMode = BigNumber.ROUND_UP) {
    return this.mlNumber.toFixed(decimalPlaces, roundingMode)
  }
}

module.exports = {
  MLNumber
}
