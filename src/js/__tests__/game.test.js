import { runTestFromCases } from '../utils/testHelpers'
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

  runTestFromCases('checkWin returns correct winner', cases, c =>
    checkWin(c.playerChoice, c.computerChoice)
  )
}

export default function({ checkWin }) {
  testCheckWin(checkWin)
}
