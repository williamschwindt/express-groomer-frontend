import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
  };

  handleInputChange = event => {
    event.preventDefault();
    console.log('handleINputChange Name', event.target.name);
    console.log('handleINputChange Value', event.target.value);
  };

  render() {
    const { fName } = this.state;
    return (
      <div>
        <h1>User Registration</h1>
        <p>First name is: {fName}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="text"
              placeholder="First Name"
              name="fName"
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Last Name"
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            <input
              type="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            <input
              type="password"
              placeholder="Password"
              // value={this.state.password}
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            <label>Are you a: </label>
            <select onChange={this.handleInputChange} defaultValue="Select">
              <option defualtValue>Select One</option>
              <option value="groomer">Groomer</option>
              <option value="client">Client</option>
            </select>
          </p>
          <p>
            <button>Register</button>
          </p>
        </form>
      </div>
      // end of first div
    );
  }
} // end of Form

export default Register;
