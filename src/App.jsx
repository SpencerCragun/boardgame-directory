import { useState, useEffect } from 'react'
import './App.css'
import boardgames from "./assets/bg-list.json"

function App() {
  const [bgJson, setbgJson] = useState ([]);
  useEffect (() => {
    setbgJson(boardgames);
  }, []);

  console.log(boardgames)

  return (
    <>
      {boardgames.map((boardgames, index) => (  
        <section className='bg-list-item' key={boardgames.id}>
          <img className='bg-list-img'></img>
          <h3 className='bg-list-title'>{boardgames.name}</h3>
          <button className='bg-list-button'>More Details!</button>
        </section>
      ))}
    </>
  )
}

export default App
