import React from 'react'
import './End.css'

const End = ( {changeGameStage} ) => {
  return (
    <div className='End'>
        <p>Parabéns, você completou o quiz</p>
        <button onClick={changeGameStage}>Reiniciar</button>
    </div>
  )
}

export default End