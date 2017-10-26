import React, { Component } from 'react'
import { connect } from 'react-redux'

import mapboxgl from 'mapbox-gl'
import buildMarker from '../marker.js'
// import userLoc from '../userPosition'

mapboxgl.accessToken = 'pk.eyJ1IjoiemFjaGFyeWR1ZGxleSIsImEiOiJjajhkNWt6dncwbDZoMzNwNzYxaGdxMmtiIn0.x_NgOhqEwuRAakcm1knjBQ';

// const fullstackCoords = [-87.6320523, 41.8881084] // CHI
// [-84.5120, 39.1031]

class Map extends Component {
  constructor(props){
    super(props)
    // this.state = {
    //   lon: -84.5120,
    //   lat: 39.1031,
    //   zoom: 10
    // }
    this.state = {
      location: [-84.5120, 39.1031],
      zoom: 10
    }
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v10',
      center: this.state.location,
      zoom: 13
    })

    this.map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }))
  }

  componentWillReceiveProps() {
    const center = this.map.getCenter()
    console.log(center)
  }

  componentWillUnmount() {
    this.map.remove()
  }

  render() {
    console.log(this.state.location)
    console.log(this.props)

    return (
      <div ref={element => this.mapContainer = element} >
      {
        this.props.messages.map( message => { buildMarker('message', message.location).addTo(this.map) })
      }
      </div>
    )
  }

  mapMessages() {

  }
}




// const marker = buildMarker('self', userLoc);
// marker.addTo(map);

const mapProps = state => ({messages: state.message})
export default connect(mapProps)(Map)

// const addButton = document.getElementsByClassName('options-btn');
// const buttonsArray = Array.prototype.slice.call(addButton);
// const itineraryHotelList = document.getElementById('hotels-list');
// const itineraryRestaurantList = document.getElementById('restaurants-list');
// const itineraryActivitiesList = document.getElementById('activities-list');

// let cancelButtonArray = [];
// let selectedId;

// buttonsArray.forEach(eachButton => {
//   eachButton.addEventListener('click', () => {
//     let selectedHotel = document.getElementById('hotels-choices');
//     let selectedRestaurant = document.getElementById('restaurants-choices');
//     let selectedActivity = document.getElementById('activities-choices');

//     if (eachButton.id === 'hotels-add') {
//       selectedId = selectedHotel.value;
//       let itineraryItem = document.createElement('li');
//       let itineraryX = document.createElement('button');
//       itineraryX.classList.add('cancelButton');

//       itineraryItem.append(selectedId);
//       itineraryItem.append(itineraryX);
//       itineraryHotelList.append(itineraryItem);

//       itineraryX.onclick = () => {
//         itineraryItem.remove();
//       }

//       arrayHotels.forEach(oneHotel => {
//         if (oneHotel.name === selectedId) {
//           buildMarker('hotels', oneHotel.place.location).addTo(map);
//         }
//       })
//     } else if (eachButton.id === 'restaurants-add') {
//       selectedId = selectedRestaurant.value;
//       let itineraryItem = document.createElement('li');
//       let itineraryX = document.createElement('button');
//       itineraryX.classList.add('cancelButton');

//       itineraryItem.append(selectedId);
//       itineraryItem.append(itineraryX);
//       itineraryRestaurantList.append(itineraryItem);

//       itineraryX.onclick = () => {
//         itineraryItem.remove();
//       }

//       arrayRestaurants.forEach(oneRestaurant => {
//         if (oneRestaurant.name === selectedId) {
//           buildMarker('restaurants', oneRestaurant.place.location).addTo(map);
//         }
//       })
//     } else if (eachButton.id === 'activities-add') {
//       selectedId = selectedActivity.value;
//       let itineraryItem = document.createElement('li');
//       let itineraryX = document.createElement('button');
//       itineraryX.classList.add('cancelButton');

//       itineraryItem.append(selectedId);
//       itineraryItem.append(itineraryX);
//       itineraryActivitiesList.append(itineraryItem);


//       arrayActivities.forEach(oneActivity => {
//         if (oneActivity.name === selectedId) {
//           buildMarker('activities', oneActivity.place.location).addTo(map);
//         }
//       })

//       itineraryX.onclick = () => {
//         itineraryItem.remove();
//       }

//     }
//   })
// })


