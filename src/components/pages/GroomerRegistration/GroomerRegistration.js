import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { registerGroomer } from '../../../api/index';

const GroomerRegistration = props => {
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
    photo_url: 'https://images.unsplash.com/photo-1586057710892-4f30aed09a20',
    walk_rate: 0,
    day_care_rate: 0,
    vet_visit_rate: 0,
  };

  const { register, handleSubmit, errors } = useForm();
  const [user, setUser] = useState(defaultUser);

  const onSubmit = () => {
    props.registerGroomer(user, props);
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
      <h1 className="registration-title">Sign Up for Express Groomer</h1>
      <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
        <label className="registration-label" htmlFor="name">
          Name{' '}
        </label>

        <input
          className="registration-input"
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

        <label className="registration-label" htmlFor="lastname">
          Last Name{' '}
        </label>
        <input
          className="registration-input"
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

        <label className="registration-label" htmlFor="phone">
          Phone{' '}
        </label>

        <input
          className="registration-input"
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

        <label className="registration-label" htmlFor="address">
          Address{' '}
        </label>

        <input
          className="registration-input"
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

        <label className="registration-label" htmlFor="city">
          City{' '}
        </label>

        <input
          className="registration-input"
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

        <label className="registration-label" htmlFor="state">
          State{' '}
        </label>

        <input
          className="registration-input"
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

        <label className="registration-label" htmlFor="country">
          Country{' '}
        </label>
        <input
          className="registration-input"
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

        <label className="registration-label" htmlFor="zipcode">
          Zipcode{' '}
        </label>

        <input
          className="registration-input"
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

        <button className="registration-button" type="submit">
          Submit
        </button>
        <p className="registration-p">
          Already have an account?{' '}
          <Link className="registration-link" to="/login">
            Sign in now
          </Link>
        </p>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    groomer: state.groomerReducer.groomer,
  };
};

export default connect(mapStateToProps, { registerGroomer })(
  GroomerRegistration
);
