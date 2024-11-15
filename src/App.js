import React, {useState} from "react";
import NewFoodInput from "./NewFoodInput";
import "./styles.css";
import Confetti from "react-confetti";

export default function App() {
  const [foodsToTry, setFoodsToTry] = useState([]);

  const addFoodItem = (food) => {
    setFoodsToTry([...foodsToTry, food]);
  };
  return (
    <div className="App">
      <Confetti />
      <h1>New Foods to Try</h1>
      <NewFoodInput addFoodItem={addFoodItem} />
      <ul className="food-list">
      {foodsToTry.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
    </div>
  );
}
