import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPic } from '../redux/picReducer'
// import getLocation from '../userPosition'

class UploadPic extends Component {

  render() {
    return (
      <form onChange={this.fileUpload}>
        <input id="fileInput" type="file" />
      </form>
    )
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

const mapDispatch = { createPic }
export default connect(null, mapDispatch)(UploadPic);
