import {
  Link,
  BrowserRouter as Router,
} from 'react-router-dom'

export const Home = () => {

  return (
  <div>
  <h1>ARCADE</h1>
  <h2> Home </h2>
  <ul>
  <li>
  <Link to="/bps"> Boulder Parchment Shears </Link>
  </li>
  </ul>
  </div>
)
}
