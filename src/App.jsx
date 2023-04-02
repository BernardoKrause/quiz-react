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
  /*const verifyAnswer = (i) => {
    setPergunta(perguntas[0]);
    if (i === 0 || pergunta === perguntas[0]) {
      console.log("resposta correta!");
    }
  }*/

  return (
    <div className="App">
      <h1 className="pergunta"></h1>
      <div className="perguntas">
        {perguntas.length > 0 ? <p>{perguntas[0].pergunta}</p> : <p>aasd</p>}
      </div>
      <div className="respostas">
      {perguntas.length > 0 ? perguntas[0].respostas.map((resposta) => <button>{resposta}</button>) : <p>asda</p>}
      </div>
    </div>
  )
}

export default App
