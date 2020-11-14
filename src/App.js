import {Routes} from './routes'
import './index.scss'

function App() {
  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      width: '100vw',
      justifyContent: 'center',
      alignItems: 'center',
      flexFlow: 'column wrap',
    }}>
      <Routes />
    </div>
  )
}

export default App;
