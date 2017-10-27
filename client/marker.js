const { Marker, Popup } = require("mapbox-gl");

const iconURLs = {
  self: 'http://i.imgur.com/D9574Cu.png',
  message: 'http://i.imgur.com/WbMOfMl.png'
};

const buildMarker = (type, coords, text) => {
  if (!iconURLs.hasOwnProperty(type)) {
    type = 'self';
  }
  const markerEl = document.createElement("div");
  markerEl.style.backgroundSize = "contain";
  markerEl.style.width = "32px";
  markerEl.style.height = "37px";
  markerEl.style.backgroundImage = `url(${iconURLs[type]})`;

  let pop = new Popup().setText(text)
  return new Marker(markerEl).setLngLat(coords).setPopup(pop);
};

module.exports = buildMarker;
