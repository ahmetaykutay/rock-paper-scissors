import { getCards } from './cards'

// app dom element
let _gameContainer
let _playerChoice = null
let _playerScore = 0
let _computerScore = 0

function handleCardClick(cardType, e) {
  _playerChoice = cardType
}

function init({ appId }) {
  _gameContainer = document.getElementById(appId)

  // add event listeners to cards
  getCards(_gameContainer).forEach(card => {
    card.element.addEventListener('click', e => {
      handleCardClick(card.type, e)
    })
  })
}

export default {
  init
}
