import { runTest, throwTestError } from '../utils/testHelpers'
import { cardTypes } from '../cards'

function testCheckWin(checkWin) {
  const cases = [
    {
      playerChoice: cardTypes.ROCK,
      computerChoice: cardTypes.SCISSORS,
      expected: 'PLAYER'
    },
    {
      playerChoice: cardTypes.PAPER,
      computerChoice: cardTypes.SCISSORS,
      expected: 'COMPUTER'
    },
    {
      playerChoice: cardTypes.ROCK,
      computerChoice: cardTypes.PAPER,
      expected: 'COMPUTER'
    },
    {
      playerChoice: cardTypes.ROCK,
      computerChoice: cardTypes.ROCK,
      expected: 'DRAW'
    }
  ]
  const testName = 'checkWin returns correct winner'

  runTest(testName, async () => {
    for (let i = 0; i < cases.length; i++) {
      const result = checkWin(cases[i].playerChoice, cases[i].computerChoice)
      if (result !== cases[i].expected) {
        throwTestError(testName, cases[i].expected, result)
      }
    }
  })
}

export default function({ checkWin }) {
  testCheckWin(checkWin)
}
