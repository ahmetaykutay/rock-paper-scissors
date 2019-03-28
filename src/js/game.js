import { getCards, cardTypes, defeatTypes } from './cards'
import test from './__tests__/game.test'

// app dom element
let _gameContainer

async function getComputerChoice() {
  const cardTypeKeys = Object.keys(cardTypes)
  const randomIndex = Math.floor(Math.random() * 3)
  return cardTypes[cardTypeKeys[randomIndex]]
}

/**
 * returns which player wins the round
 * @return {String} ['DRAW' | 'PLAYER' | 'COMPUTER']
 */
function checkWin(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'DRAW'
  }

  if (defeatTypes[playerChoice] === computerChoice) {
    return 'PLAYER'
  }

  return 'COMPUTER'
}

async function handleCardClick(type) {
  const _playerChoice = type
  const _computerChoice = await getComputerChoice()
  const result = checkWin(_playerChoice, _computerChoice)
}

export default function init({ appId }) {
  _gameContainer = document.getElementById(appId)

  // add event listeners to cards
  getCards(_gameContainer).forEach(card => {
    card.element.addEventListener('click', e => {
      handleCardClick(card.type, e)
    })
  })
}

/**
 * export for testing
 */
if (process.env.NODE_ENV === 'development'){
  test({checkWin})
}