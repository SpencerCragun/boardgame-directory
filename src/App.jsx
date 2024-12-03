import './App.css'
import { Route, Routes } from 'react-router-dom'
import BoardgameList from './components/BoardgameList'
import BgDetails from './components/BgDetails'
import { useState } from 'react'


function App() {
  
  const [bgData, setBgData] = useState(null);
  
  const bgDataHandler = (selectedGame) => {
    setBgData(selectedGame);
  };
  return (
    <>
      <Routes>
        <Route path = "/" 
        element={<BoardgameList onGameSelect={bgDataHandler} />}></Route>
        <Route path = "/details" element={<BgDetails data={bgData}/>}></Route>
      </Routes>
    </>
  )
}

export default App
