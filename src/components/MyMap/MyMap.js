import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class MyMap extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={this.props.style}
        initialCenter={{
          lat: 31.69513,
          lng: -98.985889,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
})(MyMap);
