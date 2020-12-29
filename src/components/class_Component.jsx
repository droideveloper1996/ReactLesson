import React, { Component } from "react";
class ClassComponent extends Component {
  state = {};

  constructor(props) {
    super(props);
    console.log("Class Component Props ", props);
  }
  render() {
    return <div>Class Component {this.props.name}</div>;
  }
}

export default ClassComponent;
