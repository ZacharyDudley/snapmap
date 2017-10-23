const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker.js');
const userLoc = require('./userPosition')

mapboxgl.accessToken = 'pk.eyJ1IjoiemFjaGFyeWR1ZGxleSIsImEiOiJjajhkNWt6dncwbDZoMzNwNzYxaGdxMmtiIn0.x_NgOhqEwuRAakcm1knjBQ';

// const fullstackCoords = [-87.6320523, 41.8881084] // CHI

const arrayPics = [];

fetch('/api/pictures')
  .then(result => result.json())
  .then(data => {
    data.forEach(eachPic => {
      arrayPics.push(eachPic);
    })
  });

const map = new mapboxgl.Map({
  container: 'map',
  center: userLoc,
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10'
});

const marker = buildMarker('self', userLoc);
marker.addTo(map);

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


