import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: '',
      lName: '',
      email: '',
      phone: '',
      zipcode: '',
      password: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    //   testing the handlesubmit
    const data = this.state;
    console.log('Final Data', data);
  };

  handleInputChange = event => {
    event.preventDefault();
    //   getting name of input and value
    // console.log('handleINputChange Name', event.target.name);
    //   console.log('handleINputChange Value', event.target.value);
    this.setState({
      // seting key to key-value pair
      [event.target.name]: event.target.value,
    });
  };

  componentDidMount() {
    this.setState({
      fName: this.state.fName,
      lName: this.state.lName,
      email: this.state.email,
      phone: this.state.phone,
      zipcode: this.state.zip,
      password: this.state.password,
    });
  }

  render() {
    //   change state based on whats coming in input
    const { fName } = this.state;

    return (
      <div>
        <h1>User Registration</h1>
        {/* To test functionality */}
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
              name="lName"
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            <input
              type="email"
              placeholder="email"
              name="email"
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="phone #"
              name="phone"
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="zipcode"
              name="zipcode"
              onChange={this.handleInputChange}
            />
          </p>
          {/* <p>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handleInputChange}
            />
          </p> */}
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
