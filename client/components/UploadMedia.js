import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPic } from '../redux/picReducer'
import { createMessage } from '../redux/messageReducer'
// import getLocation from '../userPosition'

class UploadMedia extends Component {
  constructor(){
    super()
    this.state = {
      message: '',
      location: []
    }

    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  componentDidMount() {
    const success = (pos) => {
      this.setState({ location: [pos.coords.longitude, pos.coords.latitude] })
    }

    const failure = (err) => {
      console.error(err.message)
    }

    this.watchId = navigator.geolocation.watchPosition(success, failure)
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId)
  }

  render() {
    return (
      <div>
      <form onSubmit={this.submitHandler}>
        <input name="message" type="text" placeholder="Message" onChange={this.changeHandler} />
        <button type="submit">POST</button>
      </form>

      <form onChange={this.fileUpload}>
        <input id="fileInput" type="file" />
      </form>
      </div>
    )
  }

  changeHandler(event) {
    this.setState({message: event.target.value})
  }

  submitHandler(event) {
    event.preventDefault()
    let newMessage = {}
    newMessage.text = this.state.message
    newMessage.location = this.state.location
    this.props.createMessage(newMessage)
  }

  // async submitHandler(event) {
  //   event.preventDefault()
  //   let newMessage = {}
  //   newMessage.text = this.state.message

  //   try {
  //     const loc = await this.getLocation()
  //     newMessage.location = loc
  //     this.props.createMessage(newMessage)
  //   } catch(err) {
  //     console.error(err)
  //   }

  // }

  getLocation() {
    var location

    const success = (pos) => {
      location = [pos.coords.longitude, pos.coords.latitude]
      return location
    }

    const failure = (err) => {
      console.error(err.message)
    }

    navigator.geolocation.watchPosition(success, failure)

    return location
  }








  fileUpload() {
    let fileInput = document.getElementById('fileInput')
    let file = fileInput.files[0]
    // this.ctrl = createThrobber(file)
    let reader = new FileReader()
    let xhr = new XMLHttpRequest()
    // this.xhr = xhr

    // xhr.upload.addEventListener('progress', e => {
    //   if (e.lengthComputable) {
    //     let percentage = Math.round((e.loaded * 100) / e.total)
    //     console.log(percentage)
    //   }
    // }, false)

    // xhr.upload.addEventListener('load', e => {
    //   console.log('LOADED')
    // })

    xhr.open('POST', 'http://localhost:3000/api/pictures')
    xhr.overrideMimeType('text/plain; charset=x-user-defined-binary')

    reader.onload = function(event){

      console.log(event.target.result)
      xhr.send(event.target.result)
    }

    reader.readAsBinaryString(file)
  }
}

const mapDispatch = { createPic, createMessage }
export default connect(null, mapDispatch)(UploadMedia);
