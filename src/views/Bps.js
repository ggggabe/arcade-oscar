import React from 'react'
import {
  Link,
  BrowserRouter as Router,
} from 'react-router-dom'

export const Bps = () =>(
  <div style={{
    display: 'flex',
    width: '100vw',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }}>
  <div className='header' style={{
    height:'50vw',
    display:'flex',
  }}>
  <h1> Boulder Parchment Shears </h1>
  <h2> Decide Fates </h2>
  </div>
  <ul>
  <li>
  <Link to="/"> Home </Link>
  </li>
  </ul>
  </div>
)
