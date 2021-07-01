import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import pixel from './pixel.jpeg'
// import indicator from './Icon.svg'
import indicator from './indicator.svg'
export class MapContainer extends Component {
  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false
  };

  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };

  render() {
    // if (!this.props.loaded) return <div>Loading...</div>;

    return (
      <Map
        className="map"
        google={this.props.google}
        onClick={this.onMapClicked}
        style={{ height: "100%", position: "relative", width: "100%" }}
        zoom={13}
      >
        <Marker
          // {...this.props}
          icon={indicator}


          name="Marker 1"
          onClick={this.onMarkerClick}
          position={{ lat: 37.778519, lng: -122.40564 }}
        />

        <Marker
        // {...this.props}
        icon={indicator}          
        onClick={this.onMarkerClick}
          position={{ lat: 37.759703, lng: -122.428093 }}
        />

        <Marker 
        //  {...this.props}
         icon={indicator}
         onClick={this.onMarkerClick} 
         position={{ lat: 37.769703, lng: -122.428093 }}
         />

        <InfoWindow
          options={{
            pane: "overlayLayer",
            // pixelOffset: new window.google.maps.Size(-140, -60),
            alignBottom: true,
            boxStyle: {
                boxShadow: `3px 3px 10px rgba(0,0,0,0.6)`,
                radius:'5px'
                
            },
            closeBoxURL : ""
            }}
          marker={this.state.activeMarker}
          // onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <img src={pixel}  className='image_map' />
            <div className='data'>
              <span className='budget'>$1234</span>
              <span className='beds'>15 Beds, 14 Baths</span> 
              {/* <span className='baths'></span> */}
            </div>
            <button class='marker_button'  >View Details</button>
            <h4>{this.state.selectedPlace.name} yes ss</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBURKqVNB1eT1EPIj4KqCh2N4zwlo_aLW4",
  version: "3.38"
})(MapContainer);
