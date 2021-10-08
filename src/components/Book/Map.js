import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import PlacesAutocomplete from "react-places-autocomplete";
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: " ",
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

      MapCenter: {
        lat: -37.922146,
        lng: 145.038324,
      },
      markers: [
        {
          lng: -36.001546,
          lat: 128.20648,

          showFlag: false 
        },
        {
          lng: 113.001546,
          lat: 27.20648,

          showFlag: false
        }
      ]
    };
  }

  handleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng);
        this.setState({ address });
        this.setState({MapCenter:latLng});
      })
      .catch((error) => console.error("Error", error));
  };

  render() {
    return (
        <div className="container">
                <h2>map for covid-19 test point </h2>
                <hr class="solid"></hr>

      
      <div id="googleMap">
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: "Search Places ...",
                  className: "location-search-input",
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            
          )}
        </PlacesAutocomplete>
        <Map
          google={this.props.google}
          initialCenter={{
            lat: this.state.MapCenter.lat,
            lng: this.state.MapCenter.lng,
          }}
          center={{
            lat: this.state.MapCenter.lat,
            lng: this.state.MapCenter.lng,
          }}
        >
          <Marker
            position={{
              lat: this.state.MapCenter.lat,
              lng: this.state.MapCenter.lng,
            }}
          />
        </Map>
        
      </div>
      

      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD_o2jGI84nOphuaU5hDCxRu-zk8HcAVhg",
})(MapContainer);
