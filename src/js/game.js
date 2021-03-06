import { getCards, cardTypes, defeatTypes } from './cards'
import Score from './score'
import test from './__tests__/game.test'

const imageSources = {
  [cardTypes.ROCK]: '/img/rock.png',
  [cardTypes.PAPER]: '/img/paper.png',
  [cardTypes.SCISSORS]: '/img/scissors.png'
}

// app dom element
let _gameContainer
let _playerChoiceCard
let _computerChoiceCard
let _score

function getComputerChoice() {
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

function renderChoices(playerChoice, computerChoice) {
  _playerChoiceCard.src = imageSources[playerChoice]
  _computerChoiceCard.src = imageSources[computerChoice]
}

async function handleCardClick(type) {
  const _playerChoice = type
  const _computerChoice = getComputerChoice()
  renderChoices(_playerChoice, _computerChoice)
  const result = checkWin(_playerChoice, _computerChoice)
  _score.addScore(result)
}

export default function init({ appId }) {
  _gameContainer = document.getElementById(appId)
  _playerChoiceCard = _gameContainer.querySelector('.player-choice')
  _computerChoiceCard = _gameContainer.querySelector('.computer-choice')
  _score = new Score(_gameContainer)

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
if (process.env.NODE_ENV === 'development') {
  test({ checkWin })
}
