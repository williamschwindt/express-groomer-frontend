import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
// import Autocomplete from 'react-google-autocomplete';
import { registerCustomer } from '../../../api/index';

import './CustomerRegistration.css';
import { Link } from 'react-router-dom';

const CustomerRegistration = props => {
  const defaultUser = {
    name: '',
    lastname: '',
    email: props.email,
    phone: '',
    zip: '',
    address: '',
    city: '',
    state: '',
    country: '',
    photo_url:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstartupheretoronto.com%2Fpartners%2Fextreme-venture-partners%2Fthinkdata-partners-with-the-vector-institute-to-provide-ai-research-platform%2Fattachment%2Fdefault-user-image-png-5%2F&psig=AOvVaw0EYvH2za0ND53SzXYgPi28&ust=1606349223356000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCD_aiznO0CFQAAAAAdAAAAABAD',
  };

  const { register, handleSubmit, errors } = useForm();
  const [user, setUser] = useState(defaultUser);

  const onSubmit = () => {
    props.registerCustomer(user, props);
  };

  const handleInputChange = event => {
    event.preventDefault();
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="registration-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign Up for Express Groomer</h1>
        <label htmlFor="name">Name </label>

        <input
          type="text"
          id="name"
          name="name"
          onChange={handleInputChange}
          aria-invalid={errors.name ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 30 })}
        />

        {errors.name && errors.name.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.name && errors.name.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}

        <label htmlFor="lastname">Last Name </label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          onChange={handleInputChange}
          aria-invalid={errors.lastname ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 30 })}
        />

        {errors.lastname && errors.lastname.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.lastname && errors.lastname.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}

        <label htmlFor="phone">Phone </label>

        <input
          type="text"
          id="phone"
          name="phone"
          onChange={handleInputChange}
          aria-invalid={errors.phone ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 30 })}
        />

        {errors.phone && errors.phone.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.phone && errors.phone.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}

        <label htmlFor="address">Address </label>

        <input
          type="text"
          id="address"
          name="address"
          onChange={handleInputChange}
          aria-invalid={errors.address ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 30 })}
        />

        {errors.address && errors.address.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.address && errors.address.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}

        <label htmlFor="city">City </label>

        <input
          type="text"
          id="city"
          name="city"
          onChange={handleInputChange}
          aria-invalid={errors.city ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 30 })}
        />

        {errors.city && errors.city.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.city && errors.city.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}

        <label htmlFor="state">State </label>

        <input
          type="text"
          id="state"
          name="state"
          onChange={handleInputChange}
          aria-invalid={errors.state ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 30 })}
        />

        {errors.state && errors.state.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.state && errors.state.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}

        <label htmlFor="country">Country </label>
        <input
          type="text"
          id="country"
          name="country"
          onChange={handleInputChange}
          aria-invalid={errors.country ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 30 })}
        />

        {errors.country && errors.country.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.country && errors.country.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}

        <label htmlFor="zipcode">Zipcode </label>

        <input
          type="text"
          id="zipcode"
          name="zip"
          onChange={handleInputChange}
          aria-invalid={errors.zipcode ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 30 })}
        />

        {errors.zipcode && errors.zipcode.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.zipcode && errors.zipcode.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}

        <button type="submit">Submit</button>
        <p>
          Already have an account? <Link to="/login">Sign in now</Link>
        </p>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    customer: state.customerReducer.customer,
  };
};

export default connect(mapStateToProps, { registerCustomer })(
  CustomerRegistration
);
