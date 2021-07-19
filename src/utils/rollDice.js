import getRandomInt from "./getRandomInt";

const rollDice = (numberOfDice, numberOfSides) => {
  const response = {
    individualDiceValues: [],
    total: 0,
  };

  for (let i = 0; i < numberOfDice; i++) {
    response.individualDiceValues.push(getRandomInt(1, numberOfSides));
  }

  response.total = response.individualDiceValues.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  return response;
};

export default rollDice;
