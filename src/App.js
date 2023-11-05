import React from "react";
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import PizzaCalculator from "./components/PizzaCalculator";
import "./style.css";
import { useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const changeNameHandler = (e) => {
    const userNameAction = {
      type: "CHANGE_USERNAME",
      payload: e.target.value,
    };
    dispatch(userNameAction);
  };

  return (
    <div>
      <Navigation />
      <main>
        <div className="userNameSection">
          <label>Your name: </label>
          <input onChange={changeNameHandler} />
        </div>
        <Title />
        <PizzaCalculator />
      </main>
    </div>
  );
}
