import { getCards, cardTypes, defeatTypes } from './cards'
import test from './__tests__/game.test'

const imageSources = {
  [cardTypes.ROCK]: 'rock',
  [cardTypes.PAPER]: 'paper',
  [cardTypes.SCISSORS]: 'scissors'
}

// app dom element
let _gameContainer
let _playerChoiceCard
let _computerChoiceCard

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

function renderChoices(playerChoice, computerChoice){
  _playerChoiceCard.innerHtml = imageSources[playerChoice]
  _computerChoiceCard.innerHtml = imageSources[computerChoice]
}

async function handleCardClick(type) {
  const _playerChoice = type
  const _computerChoice = await getComputerChoice()
  renderChoices()
  const result = checkWin(_playerChoice, _computerChoice)
}

export default function init({ appId }) {
  _gameContainer = document.getElementById(appId)
  _playerChoiceCard = _gameContainer.querySelector('.player-choice')
  _computerChoiceCard = _gameContainer.querySelector('.computer-choice')

  // add event listeners to cards
  getCards(_gameContainer).forEach(card => {
    card.element.addEventListener('click', e => {
      handleCardClick(card.type, e)
    })
  })
}

/**
 *  run tests on debug mode
 */
if (process.env.NODE_ENV === 'development'){
  test({checkWin})
}