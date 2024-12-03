// import { Link } from "react-router-dom";
// import boardgames from "../assets/bg-list.json"
// import { useState, useEffect } from 'react'

// const BoardgameList = ( {onGameSelect} ) => {

//   const [bgJson, setBgJson] = useState ([]);
    
//     useEffect (() => {
//       setBgJson(boardgames);
//     }, []);

//     const handleGameSelect = (game) => {
//       onGameSelect(game)
//     }


//   return (
//       <>
//         {bgJson((game) => (  
//           <section className='bg-list-item' key={game.id}>
//             <img className='bg-list-img'></img>
//             <h3 className='bg-list-title'>{game.name}</h3>
//             <Link to="/details">
//               <button className='bg-list-button' onClick={() => handleGameSelect(game)}>More Details!</button>
//             </Link>
//           </section>
//         ))}
//       </>
//     );
// };
// export default BoardgameList


import { Link } from "react-router-dom";
import boardgames from "../assets/bg-list.json";
import { useState, useEffect } from 'react';

const BoardgameList = ({ onGameSelect }) => {
  const [bgJson, setBgJson] = useState([]);

  useEffect(() => {
    setBgJson(boardgames);
  }, []);

  const handleGameSelect = (game) => {
    onGameSelect(game);
  };

  return (
    <>
      {bgJson.map((game) => (
        <section className="bg-list-item" key={game.id}>
          <img
            className="bg-list-img"
            src={game.imageUrl}
            alt={`Cover of ${game.name}`}
          />
          <h3 className="bg-list-title">{game.name}</h3>
          <Link to="/details">
            <button
              className="bg-list-button"
              onClick={() => handleGameSelect(game)}
            >
              More Details!
            </button>
          </Link>
        </section>
      ))}
    </>
  );
};

export default BoardgameList;

