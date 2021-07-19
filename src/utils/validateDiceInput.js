const validateDiceInput = (inputString) =>
  includesDCharacter(inputString) && includesTwoIntegers(inputString);

const includesDCharacter = (inputString) => inputString.includes("d");
const includesTwoIntegers = (inputString) => {
  const diceValues = inputString.split("d");

  if (diceValues[0] === "" || diceValues[1] === "") {
    return false;
  }

  const firstNumber = Number(diceValues[0]);
  const secondNumber = Number(diceValues[1]);
  const isNumbers = !Number.isNaN(firstNumber) && !Number.isNaN(secondNumber);

  if (!isNumbers) {
    return false;
  }

  const isIntegers =
    Number.isInteger(firstNumber) && Number.isInteger(secondNumber);

  if (!isIntegers) {
    return false;
  }

  return true;
};

export default validateDiceInput;
