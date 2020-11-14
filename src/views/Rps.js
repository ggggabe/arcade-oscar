import React from 'react';

const varTest = ''

const oscarScore = 69
const myScore = 0

export const Rps = () => (
<>
  <div className='scoreKeeperNav'>
  <div className='oscarScore'>Oscar {oscarScore}</div>
  <div className='myScore'>You {myScore}</div>
  </div>

  <h1> Rock Paper Scissors </h1>
  <div className='startButton'> Start Game </div>
</>
)
