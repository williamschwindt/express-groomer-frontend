import React from 'react';
import { Link } from 'react-router-dom';

const GroomerDisplay = props => {
  //   let groomerInfo = props.location.state.groomer;
  let groomerInfo = props.history.state.groomer;
  return (
    // name, location, phone#, schedule
    <div className="profile-page">
      <Link to="/customer-dashboard">Home</Link>
      <div className="profile-photo">
        <p>{groomerInfo.photo_url}</p>
      </div>
      <div className="profile-description">
        <h3>{groomerInfo.name}</h3>
        {/* {console.log('GroomerDisplay Props', props)} */}
        <h4>About Me</h4>
        <p>{groomerInfo.description}</p>
        <ul>
          <h4>Contact: </h4>
          <li>{groomerInfo.phone}</li>
          <li>{groomerInfo.email}</li>
          <li>
            {groomerInfo.address}, {groomerInfo.zip}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GroomerDisplay;
