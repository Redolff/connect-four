import './App.css'
import { Game } from './components/Game'
import { Turn } from './components/Turn'
import { Winner } from './components/Winner'
import { GameProvider } from './context/GameProvider'

const App = () => {

  return (
    <GameProvider>
      <div className='board'>
          <h1>Conecta 4</h1>
          <Game />
          <Turn />
          <Winner />
      </div>
    </GameProvider>
  )
}

export default App