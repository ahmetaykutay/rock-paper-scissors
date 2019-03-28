export const cardTypes = {
  PAPER: 'PAPER',
  ROCK: 'ROCK',
  SCISSORS: 'SCISSORS'
}

export function getCards(container){
  const rockCard = container.querySelector('.rock')
  const paperCard = container.querySelector('.paper')
  const scissorsCard = container.querySelector('.scissors')

  return [
    {
      element: rockCard,
      type: cardTypes.ROCK,
      defeats: cardTypes.SCISSORS
    },
    {
      element: paperCard,
      type: cardTypes.PAPER,
      defeats: cardTypes.ROCK
    },
    {
      element: scissorsCard,
      type: cardTypes.SCISSORS,
      defeats: cardTypes.PAPER
    }
  ]
}