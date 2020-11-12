import React from 'react';
import { Link } from 'react-router-dom';

const GroomerDisplay = props => {
  let groomerInfo = props.location.groomer.groomer;
  return (
    // name, location, phone#, schedule
    <div className="profile-page">
      <Link to="/customer-dashboard">Home</Link>
      <div className="profile-photo">
        <o>{groomerInfo.photo_url}</o>
      </div>
      <div className="profile-description">
        <h3>{groomerInfo.name}</h3>
        {console.log('GroomerDisplay Props', groomerInfo)}
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
