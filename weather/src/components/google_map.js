import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    const google = window.google;
    new google.map.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render() {
    return (
      <div ref="map"></div>
    )
  }
}

export default GoogleMap;