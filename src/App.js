import React, { useState } from "react";
import TodoComponent from "./components/TodoComponent";
import Login from "./components/Login";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  const onClickHandler = () => {
    // if (isLogin === true) {
    //   setIsLogin(false);
    // } else {
    //   setIsLogin(true);
    // }
    setIsLogin(!isLogin);
  };

  return (
    <div className="app">
      {isLogin === true ? <TodoComponent /> : <Login />}
      <button onClick={onClickHandler}>
        {isLogin === true ? "Logout Button" : "Login Button"}
      </button>
    </div>
  );
}
