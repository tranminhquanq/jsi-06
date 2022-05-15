import React from "react";

const TodoInput = () => {
  const onChangeHandler = (event) => {
    console.log(event.target.value);
  };

  const onClickHandler = () => {};

  return (
    <div>
      <input type="text" onChange={onChangeHandler} />
      <button onClick={onClickHandler}>Add</button>
    </div>
  );
};

export default TodoInput;
