// const success = (pos) => {
//   console.log(pos)
// }

// const failure = (err) => {
//   console.error(err.message)
// }
let loc = navigator.geolocation.watchPosition()

module.exports = [loc.latitude, loc.longitude]
