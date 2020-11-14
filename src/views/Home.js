import {
  Link,
  BrowserRouter as Router,
} from 'react-router-dom'

export const Home = () => {

  return (
  <div>
  <h1> Home </h1>
  <ul>
  <li>
  <Link to="/bps"> Boulder Parchment Shears </Link>
  </li>
  </ul>
  </div>
)
}
