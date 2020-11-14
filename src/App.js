import Splash from './scenes/Splash'
import {Routes} from './routes'

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
      <Splash />
      <Routes />
    </div>
  )
}

export default App;
