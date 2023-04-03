import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [perguntas, setPerguntas] = useState([]);
  
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

  //const {id,pergunta,resposta} = perguntas[0];
  const verifyAnswer = (i) => {
    if (i === 2) {
      console.log("Correto!")
    }
  }

  return (
    <div className="App">
      <div className="perguntas">
        {perguntas.length > 0 ? <p>{perguntas[0].pergunta}</p> : <p>aasd</p>}
      </div>
      <div className="respostas">
      {perguntas.length > 0 ? perguntas[0].respostas.map(
        (resposta, i) => <button onClick={() => {
          verifyAnswer(i)
        }}>{resposta}</button>) : <p>asda</p>}
      </div>
    </div>
  )
}

export default App
