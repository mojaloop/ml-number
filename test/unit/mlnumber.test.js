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
 * Name Surname <name.surname@gatesfoundation.com>

 * Rajiv Mothilal <rajiv.mothilal@modusbox.com>
 --------------
 ******/
'use strict'

const Test = require('tapes')(require('tape'))
const MlNumber = require('../../src/mlnumber').MlNumber

Test('mlnumber', mlnumberTest => {
  let numLib

  mlnumberTest.beforeEach( test => {
     numLib = new MlNumber({
      DECIMAL_PLACES: 40,
      ROUNDING_MODE: 7,
      POW_PRECISION: 0
    })
    test.end()
  })

  mlnumberTest.test('addlist should add a list of numbers', test => {
    let sum = numLib.sumList([1,2,3])
    test.equal(sum, '6')
    test.end()
  })

  mlnumberTest.test('addlist should add a list of string numbers', test => {
    let sum = numLib.sumList(['1','2','3'])
    test.equal(sum, '6')
    test.end()
  })

  mlnumberTest.test('addlist should add a list of string numbers and normal numbers', test => {
    let sum = numLib.sumList(['1',2,'3'])
    test.equal(sum, '6')
    test.end()
  })

  mlnumberTest.test('add should add 2 numbers', test => {
    let add = numLib.add(1,2)
    test.equal(add, '3')
    test.end()
  })

  mlnumberTest.test('add should add 2 string numbers', test => {
    let add = numLib.add('1','2')
    test.equal(add, '3')
    test.end()
  })

  mlnumberTest.test('add should add a string number and number', test => {
    let add = numLib.add('1',2)
    test.equal(add, '3')
    test.end()
  })

  mlnumberTest.test('multiply should multiply 2 numbers', test => {
    let multiply = numLib.multiply(12,2)
    test.equal(multiply, '24')
    test.end()
  })

  mlnumberTest.test('multiply should multiply 2 string numbers', test => {
    let multiply = numLib.multiply('12','2')
    test.equal(multiply, '24')
    test.end()
  })

  mlnumberTest.test('multiply should multiply a string number and normal number', test => {
    let multiply = numLib.multiply('12',2)
    test.equal(multiply, '24')
    test.end()
  })

  mlnumberTest.test('subtract should subtract 2 numbers', test => {
    let difference = numLib.subtract(10,2)
    test.equal(difference, '8')
    test.end()
  })

  mlnumberTest.test('subtract should subtract 2 string numbers', test => {
    let difference = numLib.subtract('10','2')
    test.equal(difference, '8')
    test.end()
  })

  mlnumberTest.test('subtract should subtract a string number and normal number', test => {
    let difference = numLib.subtract('10',2)
    test.equal(difference, '8')
    test.end()
  })

  mlnumberTest.test('divide should divide 2 numbers', test => {
    let divide = numLib.divide(1,2)
    test.equal(divide, '0.5')
    test.end()
  })

  mlnumberTest.test('divide should divide 2 string numbers', test => {
    let divide = numLib.divide('1','2')
    test.equal(divide, '0.5')
    test.end()
  })

  mlnumberTest.test('divide should divide a string number and normal number', test => {
    let divide = numLib.divide('1',2)
    test.equal(divide, '0.5')
    test.end()
  })

  mlnumberTest.end()
})
