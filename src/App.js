import "./App.css";
import { React, Component } from "react";
import DiceInput from "./components/DiceInput";
import DiceList from "./components/DiceList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDiceRollResult: null,
    };
  }

  onDiceRoll = (diceRollResult) => {
    this.setState({ currentDiceRollResult: diceRollResult });
  };

  render() {
    return (
      <div className="App">
        <DiceInput onDiceRoll={this.onDiceRoll} />
        <DiceList
          diceValues={this.state.currentDiceRollResult?.individualDiceValues}
        />
      </div>
    );
  }
}

export default App;
