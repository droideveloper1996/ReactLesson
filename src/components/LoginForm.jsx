import React, { Component } from "react";
class LoginComponent extends Component {
  userRef = React.createRef();
  passRef = React.createRef();
  state = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("Initial Errors Object Before Validation ",Object.keys(this.state.errors).length)
    this.validate();

    //Validate Inputs

    //Handle Network Calls
  };

  validate = () => {
    console.log("Validate Function Called");
    const accountCopy = { ...this.state.account };
    let error = {};
    if ( accountCopy["username"] === "") {
      error["username"] = "Username is not valid or is Empty";
    }
    if ( accountCopy["password"] === "") {
      error["password"] = "Password is Empty";
      if (accountCopy["password"].length < 6) {
        error["password"] = "Password Must be atleast 6 chacters";
      }
    }
    this.setState({
      errors: error,
    });

    console.log("Initial Errors Object After Validation ",Object.keys(error).length)

    if(Object.keys(error).length>0){
      return true;
    }
    return false;
  };

  handleChange = (e) => {
    console.log(e);
    const account = { ...this.state.account };
    account[e.target.name] = e.target.value;

    //account['username']=a
    this.setState({
      account: account,
    });
  };

  componentDidMount() {
    this.userRef.current.focus();
  }

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="">Username</label>
            <input
              className="form-control"
              type="text"
              name="username"
              id="username"
              ref={this.userRef}
              placeholder="Username"
              onChange={this.handleChange}
            />
        { Object.keys(this.state.errors).length>0 &&  <div className="alert alert-danger"> Error Message for Username</div>}
          </div>
          <div className="form-group">
            <label htmlFor=""></label>
            <input
              className="form-control"
              type="text"
              name="password"
              onChange={this.handleChange}
              placeholder="Password"
            />
           { Object.keys(this.state.errors).length>0 &&  <div className="alert alert-danger"> Error Message for password</div>}
          </div>

          <button
            className="btn btn-primary"
            type="submit"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginComponent;
