import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMessages } from '../redux/messageReducer'

import mapboxgl from 'mapbox-gl'
import buildMarker from '../marker.js'

mapboxgl.accessToken = 'pk.eyJ1IjoiemFjaGFyeWR1ZGxleSIsImEiOiJjajhkNWt6dncwbDZoMzNwNzYxaGdxMmtiIn0.x_NgOhqEwuRAakcm1knjBQ';

// const fullstackCoords = [-87.6320523, 41.8881084] // CHI
// [-84.5120, 39.1031]

class Map extends Component {
  constructor(props){
    super(props)
    this.state = {
      location: [-84.5120, 39.1031],
      zoom: 10,
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

    // this.map.on('load', function() {
    //   this.addSource('geojson', this.props.messages)

    //   this.map.addLayer({
    //     id: 'view-circle',
    //     type: 'circle',
    //     source: 'geojson',
    //     paint: {
    //       'circle-radius': 5,
    //       'circle-color': '#000'
    //     },
    //     filter: ['in', '$type', 'Point']
    //   })
    // })

    // this.map.on('render', function(){
    //   var inRange = this.map.queryRenderedFeatures()
    //   console.log(inRange)
    // })

    this.mapMessages()

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
      <div ref={element => this.mapContainer = element} />
    )
  }

  mapMessages() {
    this.props.messages.map( message => {
      buildMarker('message', message.location, message.text).addTo(this.map)
    })
  }
}

const mapProps = state => ({messages: state.message})
const mapDispatch = dispatch => ({
  fetchMessages: function(){
    dispatch(fetchMessages())
  }
})
export default connect(mapProps, mapDispatch)(Map)
