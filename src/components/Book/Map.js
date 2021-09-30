import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},

    MapCenter: {
      lat: 49.2827291 ,
      lng:-123.1207375
    }
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        initialCenter={{
          lat: this.state.MapCenter.lat,
          lng: this.state.MapCenter.lng
        }}
        center={{
          lat: this.state.MapCenter.lat,
          lng: this.state.MapCenter.lng,
        }}
      >
        <Marker 
        position={{
          lat: this.state.MapCenter.lat,
          lng: this.state.MapCenter.lng
        
        }}
        
        />
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyD_o2jGI84nOphuaU5hDCxRu-zk8HcAVhg",
})(MapContainer);
