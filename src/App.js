import React from "react";
import NewFoodInput from "./NewFoodInput";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>New Foods to Try</h1>
      <NewFoodInput />
      <ul className="food-list"></ul>
    </div>
  );
}
