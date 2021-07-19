import { Component } from "react";
import rollDice from "../utils/rollDice";

class DiceInput extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "" };
  }

  onDiceInput = (input) => {
    this.setState({ inputValue: input.target.value });
  };

  onRollClick = () => {
    const diceValues = this.state.inputValue.split("d");
    const numberOfDice = diceValues[0];
    const numberOfSides = diceValues[1];

    const result = rollDice(numberOfDice, numberOfSides);
    this.props.onDiceRoll(result);
  };

  render() {
    return (
      <div className="dice-input">
        <input type="text" onChange={this.onDiceInput} />
        <button onClick={this.onRollClick}>Roll!</button>
      </div>
    );
  }
}

export default DiceInput;
