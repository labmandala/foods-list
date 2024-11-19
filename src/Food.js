import React from "react";

const Food = (props) => {
  const onDelete = () => {
    props.deleteFood(props.food);
  };

  return (
    <li>
      {props.food}
      <span className="delete" onClick={onDelete}>
        X
      </span>
    </li>
  );
};

export default Food;
