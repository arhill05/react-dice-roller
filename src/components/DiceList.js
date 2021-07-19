import "./DiceList.css";
import IndividualDie from "./IndividualDie";

const DiceList = (props) => {
  const { diceValues } = props;
  if (!diceValues) {
    return <></>;
  }

  const diceList = diceValues.map((diceValue, index) => (
    <IndividualDie key={"dice-" + index} diceValue={diceValue} />
  ));

  return <div className="dice-list">{diceList}</div>;
};

export default DiceList;
