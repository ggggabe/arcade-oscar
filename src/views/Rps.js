import React, {useState} from 'react';

const assignOscarWeapon = () => {
  let oscarWeapon;
  const randyNum = Math.floor(Math.random()*3)
  if (randyNum === 1){
    oscarWeapon = 'rock'
  }
  else if (randyNum === 2){
    oscarWeapon = 'paper'
  }
  else {
    oscarWeapon = 'scissors'
  }
  return oscarWeapon
}

const startGame = () => {
  const oscarWeapon = assignOscarWeapon()
  console.log(oscarWeapon)
}

export const Rps = () => {

  const [started,setStart] = useState(false)
  const [userWeapon,setWeapon] = useState('')
  const [winner,setWinner] = useState('')

  const oscarWeapon = assignOscarWeapon()
  console.log(oscarWeapon, userWeapon)

const whoWins = () => {
  if (userWeapon) {
    if (userWeapon === oscarWeapon){
      console.log('tie')
      setWinner('tie')
    }
    else if (userWeapon === 'rock' && oscarWeapon !== 'paper' ){
      console.log('user wins')
      setWinner('user')
    }
    else if  (userWeapon === 'scissors' && oscarWeapon !== 'rock'){
      console.log('user wins')
      setWinner('user')
    }
    else if  (userWeapon === 'paper' && oscarWeapon !== 'scissors'){
      console.log('user wins')
      setWinner('user')
    }
    else {
      console.log('oscar wins')
      setWinner('oscar')
    }
  }
  }

  whoWins()

  return (
<>
  <div className='gameContainer'>
    <h1 style={{whiteSpace:'noWrap'}}> Rock Paper Scissors </h1>
    {!started && <div className='bigButton' onClick={() => {
      startGame()
      setStart(true)
    }}>
      Start Game
    </div>}
    {started &&
      <>
      <div className='bigButton' onClick={() => {setWeapon('rock')}}> Rock </div>
      <div className='bigButton' onClick={() => {setWeapon('paper')}}> Paper </div>
      <div className='bigButton' onClick={() => {setWeapon('scissors')}}> Scissors </div>
    </>
  }
    {winner &&
      <>
      <div className='winnerContainer'> You win! </div>
    </>
  }

  </div>
</>
)
}
