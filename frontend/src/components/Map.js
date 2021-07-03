import ReactDOM from "react-dom";
import React from "react";

import { GoogleMap, LoadScript, MarkerClusterer } from "@react-google-maps/api";

import MapMarker from "./MapContainer";

const mapOptions = {
  fullscreenControl: false,
  streetViewControl: false,
  mapTypeControl: false,
  styles: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [
        {
          visibility: "off"
        }
      ]
    }
  ]
};
const key = "AIzaSyBURKqVNB1eT1EPIj4KqCh2N4zwlo_aLW4"; // PUT GMAP API KEY HERE
const defaultLocation = {
  lat: 37.9755691,
  lng: 23.7361789
};
let markers = [
  {
    id: 1,
    lat: 37.975,
    lng: 23.7361789
  },
  {
    id: 2,
    lat: 37.9755,
    lng: 23.7361789
  },
  {
    id: 3,
    lat: 37.976,
    lng: 23.7361789
  }
];

class Map extends React.Component {
  state = {
    isInfoOpen: false,
    selectedMarkerId: null,
    noOfClusters: null,
    markers: markers
  };

  onClick = (isInfoOpen, selectedMarkerId) => {
    this.setState({
      isInfoOpen,
      selectedMarkerId
    });
  };

  render() {
    const { isInfoOpen, selectedMarkerId } = this.state;

    return (
      <LoadScript googleMapsApiKey={'AIzaSyBURKqVNB1eT1EPIj4KqCh2N4zwlo_aLW4'} >
        <div>
          <div
            style={{
              width: "100%",
              height: "1480px",
              // display: "flex"
            }}
          >
            <GoogleMap
              options={mapOptions}
              center={defaultLocation}
              zoom={18}
              onLoad={this.onMapMounted}
              onIdle={this.onMapIdle}
              onBoundsChanged={this.onBoundsChanged}
              onZoomChanged={this.onZoomChanged}
              mapContainerStyle={{ flex:2, minHeight:'100%' }}
            >
              <MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>
                {clusterer =>
                  this.state.markers.map(markerData => (
                    <MapMarker
                      key={markerData.id}
                      clusterer={clusterer}
                      markerData={markerData}
                      isSelected={markerData.id === selectedMarkerId}
                      isInfoOpen={ true
                        // markerData.id === selectedMarkerId && isInfoOpen
                      }
                      onClick={() => this.onClick()}
                    />
                  ))
                }
              </MarkerClusterer>
            </GoogleMap>  
          </div>
        </div>
      </LoadScript>
    );
  }
}
export default Map;
