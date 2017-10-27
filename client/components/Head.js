import React from 'react'
import { Link } from 'react-router-dom'

const Head = () => (
  <div id="headBox">

    <div id="headBox-Title">
      <h1>snapMap</h1>
    </div>

    <div id="headBox-Options">
      <Link to="/upload" >POST</Link>
      <br />
      <Link to="/map" >SEARCH</Link>
    </div>

  </div>
)

export default Head
