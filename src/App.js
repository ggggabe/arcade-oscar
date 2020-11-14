import {Routes} from './routes'

function App() {

  return (
    <div style={{
      display: 'flex',
      width: '100vw',
      justifyContent: 'center',
      alignItems: 'center',
      flexFlow: 'column wrap',
    }}>
      <h1>ARCADE</h1>
      <Routes />
    </div>
  )
}

export default App;
