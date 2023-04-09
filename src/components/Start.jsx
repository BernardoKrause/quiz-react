import React from 'react'
import './Start.css'

const Start = ( {changeGameStage} ) => {
  return (
    <div className='Start'>
        <h2>Javascript Quiz</h2>
        <p>Bem vindo ao quiz desenvolvido para testar seus conhecimentos gerais!</p>
        <button onClick={changeGameStage}>Iniciar</button>
    </div>
  ) 
}

export default Start