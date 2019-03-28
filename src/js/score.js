export default class Score {
  constructor(gameContainerElement) {
    this._playerScore = 0
    this._computerScore = 0
    this._logTextElement = gameContainerElement.querySelector('.log-text')
    this._playerScoreElement = gameContainerElement.querySelector('.player-score')
    this._computerScoreElement = gameContainerElement.querySelector('.computer-score')

    this._renderScore()
  }

  addScore(winner) {
    if (winner === 'PLAYER') {
      this._playerScore += 1
      this._logTextElement.innerHTML = 'Player wins this round'
    } else if(winner === 'COMPUTER'){
      this._computerScore += 1
      this._logTextElement.innerHTML = 'Computer wins this round'
    } else{
      this._playerScore += 1
      this._computerScore += 1
      this._logTextElement.innerHTML = 'Its a draw'
    }
    this._renderScore()
  }

  clearScore() {
    this._playerScore = 0
    this._computerScore = 0
  }

  async _renderScore(){
    this._playerScoreElement.innerHTML = this._playerScore
    this._computerScoreElement.innerHTML = this._computerScore
  }
}
