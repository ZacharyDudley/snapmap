import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPics } from '../redux'

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
      lon: 0,
      lat: 0,
      zoom: 10
    }
  }

  componentDidMount() {
    const success = pos => {
      this.setState({
        lon: pos.coords.longitude,
        lat: pos.coords.latitude
      })
    }

    const failure = err => {
      console.error(err)
    }

    navigator.geolocation.watchPosition(success, failure)

    console.log()
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [this.state.lon, this.state.lat],
      zoom: 13
    })
  }

  componentWillUnmount() {
    this.map.remove()
  }

  render() {
    return (
      <div ref={element => this.mapContainer = element} />
    )
  }

  mapPics() {
    let arrayPics = this.props.fetchPics()
    console.log(arrayPics)
  }
}




// {
//   this.props.pics.map( pic => { buildMarker('pic', pic).addTo(map) })
// }


// const marker = buildMarker('self', userLoc);
// marker.addTo(map);

const mapProps = state => ({ pics: state.pics, loc: state.userLocation })
const mapDispatch = { fetchPics }
export default connect(mapProps, mapDispatch)(Map)

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


