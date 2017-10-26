const { Marker } = require("mapbox-gl");

const iconURLs = {
  self: 'http://i.imgur.com/D9574Cu.png',
  message: 'http://i.imgur.com/WbMOfMl.png'
};

const buildMarker = (type, coords) => {
  if (!iconURLs.hasOwnProperty(type)) {
    type = 'self';
  }
  const markerEl = document.createElement("div");
  markerEl.style.backgroundSize = "contain";
  markerEl.style.width = "32px";
  markerEl.style.height = "37px";
  markerEl.style.backgroundImage = `url(${iconURLs[type]})`;
  return new Marker(markerEl).setLngLat(coords);
};

module.exports = buildMarker;
