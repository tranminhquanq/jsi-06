import React from "react";
import { Routes, Route } from "react-router-dom";
// import TodoComponent from "./components/TodoComponent";
// import Login from "./components/Login";
// import DemoNextUI from "./components/DemoNextUI";
import Usercontainer from "./components/Usercontainer";
import StudentForm from "./components/StudentForm";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import UserDetail from "./components/UserDetail";

export default function App() {
  // const [isLogin, setIsLogin] = useState(false);

  // const onClickHandler = () => {
  //   // if (isLogin === true) {
  //   //   setIsLogin(false);
  //   // } else {
  //   //   setIsLogin(true);
  //   // }
  //   setIsLogin(!isLogin);
  // };

  return (
    <div className="app">
      {/* {isLogin === true ? <TodoComponent /> : <Login />}
      <button onClick={onClickHandler}>
        {isLogin === true ? "Logout Button" : "Login Button"}
      </button> */}
      {/* <DemoNextUI /> */}
      {/* <Usercontainer /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/student-form" element={<StudentForm />} />
        <Route path="/users" element={<Usercontainer />} />
        <Route path="/users/:userId" element={<UserDetail />} />
      </Routes>
      {/* <StudentForm /> */}
    </div>
  );
}
