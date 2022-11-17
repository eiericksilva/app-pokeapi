import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [pokemons, setPokemons ] = useState([])

  const offset = 0;
  const limit = 10;
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

  useEffect(() => {

    fetch(url)
      .then( res => res.json())
      .then( jsonRes => jsonRes.results)
      .then( pokemons => setPokemons(pokemons))
      .catch( err => console.log(err))

  }, [])

  
  return (
    <div>
      <h4>Pokemon List</h4>
      <ol> 
        {pokemons.map((pokemon) => ( <li>{pokemon.name}</li> ))}
      </ol>
    </div>
  );
}

export default App;
