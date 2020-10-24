import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: '',
      lName: '',
      email: '',
      password: '',
    }; //end of state
    this.handleSubmit = this.handleSubmit.bind(this);
  } // end of constructor

  emailHandler = event => {
    this.setState({
      email: event.target.value,
    });
  }; // end of emailHandler

  passwordHandler = event => {
    this.setState({
      password: event.target.value,
    });
  }; // end of passwordHandler

  userHandler = event => {
    this.setState({
      user: event.target.value,
    });
  };

  handleSubmit = event => {
    alert(`${this.state.email} Registered Successfully!`);
    this.setState({
      fName: '',
      lName: '',
      email: '',
      password: '',
    });
    event.preventDefault();
  }; // end of handleSubmit

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>User Registration</h1>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input
            type="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.email}
          />
          <input
            type="password"
            placeholder="Password"
            // value={this.state.password}
            // onChange={this.password}
          />
          <label>Are you a: </label>
          <select onChange={this.userHandler} defaultValue="Select">
            <option defualtValue>Select One</option>
            <option value="groomer">Groomer</option>
            <option value="client">Client</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      </div>
      // end of first div
    );
  }
} // end of Form

export default Register;
