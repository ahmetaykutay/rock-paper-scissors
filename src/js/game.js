import { getCards, cardTypes, defeatTypes } from './cards'

// app dom element
let _gameContainer
let _playerChoice = null
let _computerChoice = null
let _playerScore = 0
let _computerScore = 0

async function getComputerChoice() {
  const cardTypeKeys = Object.keys(cardTypes)
  const randomIndex = Math.floor(Math.random() * 3)
  return cardTypes[cardTypeKeys[randomIndex]]
}

/**
 * returns which player wins the round
 * @return {String} ['DRAW' | 'PLAYER' | 'COMPUTER']
 */
function checkWin() {
  if (_playerChoice === _computerChoice) {
    return 'DRAW'
  }

  if (defeatTypes[_playerChoice] === _computerChoice) {
    return 'PLAYER'
  }

  return 'COMPUTER'
}

async function handleCardClick(type, e) {
  _playerChoice = type
  _computerChoice = await getComputerChoice()
  const result = checkWin()
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
