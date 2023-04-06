import { useState } from 'react'
import './App.css'
import Game from './components/Quiz';
import End from './components/End';
import Start from './components/Start';

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'quiz'},
  {id: 3, name: 'end'}
]

function App() {
  const [screen, setScreen] = useState(stages[0].name);

  const changeGameStage = () => {
    if (screen === stages[0].name) {
      setScreen(stages[1].name);
    } else if (screen === stages[1].name) {
      setScreen(stages[2].name);
    } else {
      setScreen(stages[0].name);
    }
  }

  return (
    <div className="App" >
      {screen === 'start' && <Start changeGameStage={changeGameStage} />}
      {screen === 'quiz' &&  <Game changeGameStage={changeGameStage} />}
      {screen === 'end' && <End changeGameStage={changeGameStage} />}
    </div>
  )
}

export default App
