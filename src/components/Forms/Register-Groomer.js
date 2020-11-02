import React, { Component } from 'react';

class RegisterGroomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: '',
      lName: '',
      email: '',
      phone: '',
      zipcode: '',
      address: '',
      city: '',
      state: '',
      country: '',
      //   photo_url: '',
      walk_rate: 0,
      day_care_rate: 0,
      vet_visit_rate: 0,
      //   password: '',
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

  // must be async in order to await key function
  async postDataGroomers() {
    try {
      let result = await fetch(
        // 'https://labspt12-express-groomer-a-api.herokuapp.com/groomers',
        `${process.env.REACT_APP_API_URI}/groomers`,
        {
          method: 'post',
          mode: 'no-cors', // no-cors to eliminate some errors
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
          },
          // stringify the json obj payload
          body: JSON.stringify({
            oktaId: '12345',
            name: this.state.fName,
            description: this.state.description,
            lastname: this.state.lName,
            address: this.state.address,
            zip: this.state.zip,
            phone: this.state.phone,
            email: this.state.email,
            city: this.state.city,
            state: this.state.state,
            country: this.state.country,
            walk_rate: this.state.walk_rate,
            day_care_rate: this.state.day_care_rate,
            vet_visit_rate: this.state.vet_visit_rate,
            photo_url:
              'https://images.unsplash.com/photo-1563460716037-460a3ad24ba9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
          }),
        }
      );
      console.log('RESULT', result);
    } catch (e) {
      console.log('REGISTER ERROR: ', e);
    }
  }

  //   componentDidMount() {
  //     this.setState({
  //       fName: this.state.fName,
  //       lName: this.state.lName,
  //       email: this.state.email,
  //       phone: this.state.phone,
  //       address: this.state.address,
  //       city: this.state.city,
  //       state: this.state.state,
  //       country: this.state.country,
  //       zipcode: this.state.zip,
  //       photo_url: this.state.photo_url,
  //       walk_rate: this.state.walk_rate,
  //       day_care_rate: this.state.day_care_rate,
  //       vet_visit_rate: this.state.vet_visit_rate,
  //       //   password: this.state.password,
  //     });
  //   }

  render() {
    //   change state based on whats coming in input
    const { fName } = this.state;

    return (
      <div className="registration-container">
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
          {/* end of First Name */}
          <p>
            <input
              type="text"
              placeholder="Last Name"
              name="lName"
              onChange={this.handleInputChange}
            />
          </p>
          {/* end of last name */}
          <p>
            <input
              type="email"
              placeholder="email"
              name="email"
              onChange={this.handleInputChange}
            />
          </p>
          {/* end of email */}
          <p>
            <input
              type="text"
              placeholder="phone #"
              name="phone"
              onChange={this.handleInputChange}
            />
          </p>
          {/* end of phone */}
          <p>
            <input
              type="text"
              placeholder="address"
              name="address"
              onChange={this.handleInputChange}
            />
          </p>
          {/* end of address */}
          <p>
            <input
              type="text"
              placeholder="city"
              name="city"
              onChange={this.handleInputChange}
            />
          </p>
          {/* end of city */}
          <p>
            <input
              type="text"
              placeholder="state"
              name="state"
              onChange={this.handleInputChange}
            />
          </p>
          {/* end of state */}
          <p>
            <input
              type="text"
              placeholder="country"
              name="country"
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
          {/* end of zipcode */}
          <p className="about-textbox">
            <input
              type="text"
              placeholder="Talk about yourself!"
              name="description"
              onChange={this.handleInputChange}
            />
          </p>
          {/* end of description */}
          {/* <p className="profile-photo">
            <input
              type="text"
              placeholder="Upload photo"
              name="photo_url"
              onChange={this.handleInputChange}
            />
          </p> */}
          {/* end of photo */}
          <p>
            <input
              type="number"
              step="1"
              placeholder="walk_rate"
              name="walk_rate"
              onChange={this.handleInputChange}
              min="0"
            />
          </p>
          {/* end of walk rate */}
          <p>
            <input
              type="number"
              placeholder="day care rate"
              name="day_care_rate"
              onChange={this.handleInputChange}
              min="0"
            />
          </p>
          {/* end of day care rate */}
          <p>
            <input
              type="number"
              placeholder="vet visit rate"
              name="vet_visit_rate"
              onChange={this.handleInputChange}
              min="0"
            />
          </p>
          {/* end of zipcode */}

          {/* <p>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handleInputChange}
            />
          </p> */}
          {/* <p>
            <label>Are you a: </label>
            <select onChange={this.handleInputChange} defaultValue="Select">
              <option>Select One</option>
              <option value="groomer">Groomer</option>
              <option value="client">Client</option>
            </select>
          </p> */}
          <p>
            <button onClick={() => this.postDataGroomers()}>Register</button>
          </p>
        </form>
        {console.log('WALK RATE', typeof this.state.walk_rate)}
      </div>
      // end of first div
    );
  }
} // end of Form

export default RegisterGroomer;

// import React, {userState} from 'react'

// const RegisterGroomer = () => {
//     const [name, setName] = useState("");
//     const [description, setDescription] = useState("");
//     const [lastname, setLastname] = useState("");
//     const [address, setAddress] = useState("");
//     const [zip, setZip] = useState("");
//     const [phone, setPhone] = useState("");
//     const [phone, setPhone] = useState("");
//     const [email, setEmail] = useState("");
//     const [city, setCity] = useState("");
//     const [state, setState] = useState("");
//     const [country, setCountry] = useState("");
//     const [walkRate, setWalkRate] = useState(0);
//     const [dayCareRate, setDayCareRate] = useState(0);
//     const [vetVisitRate, setVetVisitRate] = useState(0);

//     const handleSubmit = event => {
//         event.preventDefault();
//         //   testing the handlesubmit
//         const data = state;
//         console.log('Final Data', data);
//     };

//     const handleInputChange = event => {
//         event.preventDefault();
//         //   getting name of input and value
//         // console.log('handleINputChange Name', event.target.name);
//         //   console.log('handleINputChange Value', event.target.value);
//         this.setState({
//         // seting key to key-value pair
//         [event.target.name]: event.target.value,
//         });
//     };

//     return (

//     )
// }
