import React, { Component } from "react"; //Hooks
import { increment } from "../redux/action/action";
import TestComponent from "./test";
import FunctionalComponent from "./functional";
import ClassComponent from "./class_Component";
import FuncComponent from "./func_component";
import ConditionalRender from "./conditionalRender";
class CounterComponent extends Component {
  state = {
    abc: "name",
    fruits: ["Apple", "Mango", "Grapes", "Banana"],
    numbers: [1, 2, 3, 4],
    counter: 0,
    post: [],
    isLoggedIn: false,
  };
  payload = {
    fname: "Priyanshi",
    lName: "Pandey",
  };

  // fetchData = () => {
  //   //Promise
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // };

  fetchData2 = async () => {
    //Promise
    const data = await fetch("https://jsonplaceholder.typicode.com/posts"); //GET Request
    const json = await data.json();
    this.setState({
      post: json,
    });
  };

  constructor() {
    super();
    console.log("Constructor");
  }
  componentDidMount() {
    console.log("Component Did mount");
  }

  /**
   * setState()
   */

  handleDecrement = () => {
    this.state.counter = this.state.counter - 1;
    console.log("Clicked Handle Decrement ", this.state.counter);
    this.setState({
      counter: this.state.counter,
    });
  };

  handleIncrement = () => {
    this.state.counter = this.state.counter + 1;
    console.log("Clicked Handle Increment", this.state.counter);
    this.setState({
      ...this.state,
      counter: this.state.counter,
    });
  };

  getData = () => {};
  handleLogin = () => {
    const isLogin = !this.state.isLoggedIn;
    this.setState({
      isLoggedIn: isLogin,
    });
  };

  // { }  expression
  render() {
    console.log("Called Render");
    return (
      <main className="container">
        <h1>Counter Component :</h1>
        <button onClick={this.handleDecrement} className="btn btn-primary">
          -
        </button>
        <div>{this.state.counter}</div>
        <button className="btn btn-danger" onClick={this.handleIncrement}>
          +
        </button>
        <ClassComponent></ClassComponent>
        <FuncComponent name="value1" color="red"></FuncComponent>
        {/* {this.state.post.map((post) => (
          <div>{post.title}</div>
        ))} */}

        <button onClick={this.handleLogin} className="btn btn-primary">
          {" "}
          Toggle Login{" "}
        </button>

        {this.state.isLoggedIn && (
          <ConditionalRender loggedInStatus={this.state.isLoggedIn} />
        )}
      </main>
    );
  }
}

/**
 *
 * M V C  ---> Model View Controler
 *
 * CRUD  --> Create(POST) , Update(PUT), Delete(delete), Read (GET)
 *
 */

// toolbar=[{title:'Top Offer',image:'www.xyz/com/sekjfgjks.png'},{title:Grocey,img"';'},{},{},{}]

// function abc(num) {
// {title:'Top Offer',image:'www.xyz/com/sekjfgjks.png'}
//   return <h2>{num * num}</h2>;
// }

/***
 *
 * constructor()
 * props
 * Data passing Through Component
 *
 * Class Component / Functional Component
 *
 * Navigation React
 * Netowork Calls
 * react-router-dom
 *
 * HTML  anchor Tag
 *
 * <a href="link"/>
 * <Link href="link"/>
 *
 *
 * Form --> Send(POST)
 * POST--->FETCH (GET)
 * UPDATE---> PUT
 * DELETE-->delete
 *
 * API Nodejs
 *
 */

/**
 *
 * Conditional Rendering
 *
 * if(loggedIn === true){
 *   then render his name
 * }
 * else{
 *    show Login Button
 * }
 *
 *
 * constructor
 *
 * onMount
 *
 *
 */

const abc = (num) => <TestComponent />;

export default CounterComponent;
