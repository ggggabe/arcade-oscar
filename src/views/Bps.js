import React from 'react'
import {
  Link,
  BrowserRouter as Router,
} from 'react-router-dom'

export const Bps = () =>(
<>
  <div className='header' style={{
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  }}>
  <h1> Boulder Parchment Shears </h1>
  <h2> Decide Fates </h2>
  </div>

  <div className='linkBlock' style={{
    width: '50vw',
    height: '500px',
  }}>
  <ul>
  <li>
  <Link to="/" style={{
    color: 'white',
    textDecoration: 'none',
  }} > Home </Link>
  </li>
  </ul>
  </div>
  </>
)
