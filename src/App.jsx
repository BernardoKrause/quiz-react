import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [perguntas, setPerguntas] = useState([]);
  const [stat, setStat] = useState(false);
  
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

  const changeQuestions = () => {
    // alterar lógica da variavel i 
    let i = 0;
    if (stat === true) {
      i++;
    }
    return i
  }

  const verifyAnswer = (i) => {
    let question = changeQuestions();
    if (question === 0 && i === 2) {
      setStat(true);
    } else {
      
    }
  }

  return (
    <div className="App" >
      <div className="perguntas">
        {perguntas.length > 0 ? <p>{perguntas[changeQuestions()].pergunta}</p> : <p>Loading</p>}
      </div>
      <div className="respostas">
      {perguntas.length > 0 ? perguntas[changeQuestions()].respostas.map(
        (resposta, i) => <button key={i} onClick={() => {
          verifyAnswer(i);
        }}>{resposta}</button>) : <p>Loading</p>}
      </div>
    </div>
  )
}

export default App
