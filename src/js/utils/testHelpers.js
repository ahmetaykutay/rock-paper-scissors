function throwTestError(name, expected, received) {
  throw new Error(`[${name}]: expected: ${expected} received: ${received}`)
}

function checkTestResult(name, result, testCase) {
  const _name = testCase.name ? testCase.name : name
  if (typeof testCase.test === 'function') {
    const res = testCase.test(result)
    if (res !== testCase.expected) throwTestError(_name, testCase.expected, res)
    return
  }
  if (result !== testCase.expected) {
    throwTestError(_name, testCase.expected, result)
  }
}

/**
 * loops through an array of cases and calls beforeTest with the case 
 * @param {String} name name of the test
 * @param {Object} cases {expected: String | Number | Boolean, [test: Function]}
 * @param {Function} beforeTest function to run before test 
 */
export async function runTestFromCases(name, cases, beforeTest) {
  try {
    for (let i = 0; i < cases.length; i++) {
      const result = beforeTest(cases[i])
      checkTestResult(name, result, cases[i])
    }
    console.log(`[test]: tests finished correctly: ${name}`)
  } catch (error) {
    console.log(error)
  }
}
