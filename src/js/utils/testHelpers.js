export async function runTest(testName, test) {
  try {
    await test()
    console.log(`[test]: tests finished correctly: ${testName}`)
  } catch (error) {
    console.log(error)
  }
}

export function throwTestError(testName, expected, received){
  throw new Error(`[${testName}]: expected: ${expected} received: ${received}`)
}