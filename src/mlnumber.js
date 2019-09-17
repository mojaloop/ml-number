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

function MlNumber (value = 0) {
  this.MlNumber = new BigNumber(value)

  this.sumList = (values) => {
    this.MlNumber = this.MlNumber.plus(values.reduce((a, b) => {
      return new MlNumber(a).add(b)
    }))
    return this
  }

  this.add = (addition) => {
    return new MlNumber(this.MlNumber.plus(addition))
  }

  this.multiply = (product) => {
    return new MlNumber(this.MlNumber.multipliedBy(product))
  }

  this.subtract = (difference) => {
    return new MlNumber(this.MlNumber.minus(difference))
  }

  this.divide = (denominator) => {
    return new MlNumber(this.MlNumber.dividedBy(denominator))
  }

  this.toString = () => {
    return this.MlNumber.valueOf()
  }

  this.toNumber = () => {
    return this.MlNumber.toNumber()
  }

  this.toFixed = (decimalPlaces = 4, roundingMode = BigNumber.ROUND_UP) => {
    return this.MlNumber.toFixed(decimalPlaces, roundingMode)
  }

  return this
}

module.exports = {
  MlNumber
}
