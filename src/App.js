import React, {useState} from "react";
import NewFoodInput from "./NewFoodInput";
import Food from "./Food";
import "./styles.css";
import Confetti from "react-confetti";

export default function App() {
  const [foodsToTry, setFoodsToTry] = useState([]);

  const addFoodItem = (food) => {
    setFoodsToTry([...foodsToTry, food]);
  };

  const deleteFood = (foodToDelete) => {
    const updatedFoods = foodsToTry.filter((food) => food !== foodToDelete);
    setFoodsToTry(updatedFoods);
  };
  return (
    <div className="App">
      <Confetti />
      <h1>New Foods to Try</h1>
      <NewFoodInput addFoodItem={addFoodItem} />
      <ul className="food-list">
        {foodsToTry.map((food, index) => (
          <Food key={index} food={food} deleteFood={deleteFood} />
          // You could also use this if you prefer not to create a separate function:
          // <Food key={index} food={food} deleteFood={() => setFoodsToTry(foodsToTry.filter(foodToDelete => foodToDelete !== food))} />
        ))}
      </ul>
    </div>
  );
}
