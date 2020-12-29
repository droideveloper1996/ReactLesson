import React, { Component } from "react";
class LoginComponent extends Component {
  userRef = React.createRef();
  passRef = React.createRef();

  state = {
    account: {
      username: "",
      password: "",
    },
    error: {},
  };

  handleSubmit = (e) => {
    e.preventDefault();

    //Validate Inputs
    //Handle Network Calls
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
      <div>
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
