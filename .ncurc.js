module.exports = {
  reject: [
    // bignumber.js drives all monetary precision/rounding in this library. A 9.x -> 11.x major
    // bump can change rounding and edge-case behaviour, so it needs a deliberate, well-tested
    // migration rather than a routine maintenance update. Pin to 9.x pending that work.
    'bignumber.js'
  ]
}
