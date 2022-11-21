import "./App.css";
import Navbar from "./components/navbar/Navbar.component";
import Pokedex from "./components/pokedex/Pokedex";
import Searchbar from "./components/searchbar/Searchbar.component";
import { useEffect, useState } from "react";
import { getPokemons, getPokemonsData } from "./api";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url)
      }) 
      const results = await Promise.all(promises)
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log(`fetchPokemons Error: ${error}`);
    }
  };
  useEffect(() => {
    console.log("carregou");
    fetchPokemons()
  }, []);
  return (
    <>
      <Navbar />
      <Searchbar />
      <Pokedex 
        pokemons={pokemons} 
        loading={loading} />
    </>
  );
};

export default App;
