import { runTestFromCases } from '../utils/testHelpers'
import { cardTypes, getCards } from '../cards'

function testGetCards() {
  const mockContainer = {
    querySelector: selector => selector
  }
  const cases = [
    {
      test: result => result.length,
      expected: 3
    },
    {
      name: 'getCards returns all cart types',
      test: result => {
        const elements = []
        for (let el of result) {
          elements.push(el.type)
        }
        for (let cardType in cardTypes) {
          const index = elements.indexOf(cardType)
          if (index === -1) return false
        }
        return true
      },
      expected: true
    }
  ]
  runTestFromCases('getCards returns correct elements', cases, () =>
    getCards(mockContainer)
  )
}

export default function() {
  testGetCards()
}
