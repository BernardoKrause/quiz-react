import React from 'react'
import { useEffect, useState } from 'react'
import './Quiz.css'


const Game = ( {changeGameStage} ) => {
const [perguntas, setPerguntas] = useState([]);
const [count, setCount] = useState(0);
  
  const getData = () => {
      fetch('../public/db.json', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': "application/json"
        }
      }).then(res => res.json())
      .then(res => setPerguntas(res.perguntas))
  }

  useEffect(() => {
    getData();
  },[])

  const verifyAnswer = (i) => {
    let question = count;
    if (question === 0 && i === 2) {
      setCount(count + 1);
    } else if(question === 1 && i === 0) {
      setCount(count + 1);
    } else if(question === 2 && i === 3) {
      changeGameStage();
    } else {
      setCount(0);
    }
  }

  return (
    <div className='Game'>
        <div className="perguntas">
            {perguntas.length > 0 ? <p>{perguntas[count].pergunta}</p> : <p>Loading...</p>}
        </div>
        <div className="respostas">
        {perguntas.length > 0 ? perguntas[count].respostas.map(
            (resposta, i) => <button key={i} onClick={() => {
            verifyAnswer(i);
            }}>{resposta}</button>) : <p>Loading...</p>}
        </div>
  </div>
  )
}

export default Game