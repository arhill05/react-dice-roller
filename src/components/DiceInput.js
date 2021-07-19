import "./DiceInput.css";
import { Component } from "react";
import rollDice from "../utils/rollDice";
import validateDiceInput from "../utils/validateDiceInput";

class DiceInput extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "", isValidInput: true };
  }

  onDiceInputChange = (input) => {
    this.setState({ inputValue: input.target.value.toLowerCase() });
  };

  onDiceInputKeyDown = (input) => {
    console.log(input);
    if (input.key === "Enter") {
      this.rollIfInputIsValid();
    }
  };

  onRollClick = () => {
    this.rollIfInputIsValid();
  };

  doRollDice = () => {
    const diceValues = this.state.inputValue.split("d");
    const numberOfDice = diceValues[0];
    const numberOfSides = diceValues[1];

    const result = rollDice(numberOfDice, numberOfSides);
    this.props.onDiceRoll(result);
  };

  rollIfInputIsValid = () => {
    const isValidInput = validateDiceInput(this.state.inputValue);
    this.setState({ isValidInput });
    if (isValidInput) {
      this.doRollDice();
    }
  };

  render() {
    return (
      <div className="dice-input">
        <div className="dice-input-container">
          <input
            type="text"
            onKeyDown={this.onDiceInputKeyDown}
            onChange={this.onDiceInputChange}
          />
          <button onClick={this.onRollClick}>Roll!</button>
        </div>
        {!this.state.isValidInput && (
          <div className="dice-input-validation-error">
            Invalid input. Format is {"{number of dice}"}d{"{sides of dice}"}{" "}
            (e.g. "3d6").
          </div>
        )}
      </div>
    );
  }
}

export default DiceInput;
