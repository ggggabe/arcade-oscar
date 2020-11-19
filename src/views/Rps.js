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

  const oscarWeapon = assignOscarWeapon()
  console.log(oscarWeapon , userWeapon)

  switch (userWeapon) {
    case 'rock':
    oscarWeapon === 'paper' ? console.log('oscar wins, paper beats rock') : console.log('nada')
    break;
    case 'paper':
    (oscarWeapon === 'scissors') ? console.log('oscar wins, scissors beat paper') : console.log('nada')
    break;
    case 'scissors':
    (oscarWeapon === 'rock') ? console.log('oscar wins, rock beat scissors') : console.log('nada')
    break;
    default:
    console.log('You win!')
  }

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

  </div>
</>
)
}
