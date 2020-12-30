import React, { Component } from "react";
class SignupComponent extends Component {
  state = {
    message: "This is my secret message",
    show: false,
  };
  handleSubmit = (e) => {};

  handleSecret = (e) => {
    e.preventDefault();
    this.setState({
      show: !this.state.show, //!false===> true. !true===> false
    });
    // let age=21
    // if(age>18){
    //     //something

    // }
    // else{
    //     //do somthing
    // }

    //Ternery
    // age>18?"Yes He is Eligble to Vote":"He is not eligible to vote"



  };

  render() {
    return (
      <div className="col-sm-6 container">
        <form>
          <h2>Signup Form</h2>
          <div className="form-group">
            <label htmlFor=""></label>
            <input type="text" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor=""></label>
            <input
              type="text"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <button className="btn btn-primary" onClick={this.handleSubmit}>
            Signup
          </button>

          {this.state.show && this.state.message}

          <button onClick={this.handleSecret}>Show Secret Message</button>
        </form>
      </div>
    );
  }
}

export default SignupComponent;
