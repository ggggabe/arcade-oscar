import React from 'react';

const showButtons = () => {
  // something that changes the page state to disply interactive buttons that will pass the weapon choice to the program
}

const myContext = { value: 'A' };

myFunction.call(myContext);  // logs { value: 'A' }
myFunction.apply(myContext); // logs { value: 'A' }

// const compareWeapons = () => {
//   let winner;
//   console.log(oscarWeapon)
//   (oscarWeapon = 'rock') ? winner = 'me' : winner = 'oscar' ;
//   console.log(winner)
// }

const startGame = () => {
  // const randy = Math.floor(Math.random()*10)
  // const oscarWeapon = (randy > 5) ? 'rock' : 'boulder'
  // compareWeapons(oscarWeapon)
}

export const Rps = () => {
  const oscarScore = 42
  const myScore = 3

  return (
<>
  <div className='scoreKeeperNav'>
    <div className='oscarScore'>Oscar {oscarScore}</div>
    <div className='myScore'>You {myScore}</div>
  </div>

  <div className='gameContainer'>
    <h1 style={{whiteSpace:'noWrap'}}> Rock Paper Scissors </h1>
    <div className='startButton' onClick={startGame}>
      <h3>Start Game</h3>
    </div>

  </div>
</>
)
}
