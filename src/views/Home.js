import {Link} from 'react-router-dom'

export const Home = () => {

  return (
  <div>
  <h1>ARCADE</h1>
  <h2> Home </h2>
  <ul>
  <li>
  <Link to="/rps"> Rock Paper Scissors </Link>
  <Link to="/splash"> OSCAR </Link>
  </li>
  </ul>
  </div>
)
}
