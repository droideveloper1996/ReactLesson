import logo from "./logo.svg";
import "./App.css";
import React, { Component, useState, useEffect } from "react";
import NavbarComponent from "./components/navbar";
import axios from "axios";
import { useSelector, userDispatch, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/action/action";
import CounterComponent from "./components/counter";
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import XYZ from "./components/xyz";
import LoginComponent from "./components/LoginForm";

// const axiosInstance = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com/todos/1",
// });
function App() {
  // const [user, postChange] = useState({
  //   userId: "",
  //   id: "",
  //   title: "Click to get Title",
  //   completed: "",
  // });

  // useEffect(() => {
  //   console.log("Post Loaded");
  // }, [user.title]);

  // const counter = useSelector((state) => state.counter);
  // const isLoggedIn = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  // console.log(isLoggedIn);
  // const title = user.title;
  // const completed = user.completed;
  // const id = user.id;
  // function handleNameChange() {
  //   axiosInstance.get("/").then((res) => {
  //     postChange((previous) => {
  //       console.log(previous);
  //       return res.data;
  //     });
  //   });
  // }

  return (
    <React.Fragment>
      <NavbarComponent></NavbarComponent>
      {/* <h3>{title}</h3>
      <button onClick={handleNameChange}>Handle Click</button>

      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <div>{counter}</div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button> */}
      <BrowserRouter>
        <Switch>
          <Route path="/" component={CounterComponent} exact={true} />
          <Route path="/login" component={LoginComponent} />
          <Route path="/xyz" component={XYZ} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

const ABC = () => {
  const a = "Name";
  return <div>Hello world</div>;
};

//Object
//Arrays
//map
//spread
//   var , const, let

export default App;
