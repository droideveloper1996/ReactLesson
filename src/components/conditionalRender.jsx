import React, { Component } from "react";

const ConditionalRender = (props) => {
  return <div>Conditional Rendering: {props.loggedInStatus} </div>;
};

export default ConditionalRender;
