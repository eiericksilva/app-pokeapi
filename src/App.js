import "./App.css";
import Navbar from "./components/navbar/Navbar.component";
import Pokedex from "./components/pokedex/Pokedex";
import Searchbar from "./components/searchbar/Searchbar.component";
import { useEffect, useState } from "react";
import { getPokemons, getPokemonsData } from "./api";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const itensPerPage = 25
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil( data.count / itensPerPage ))
    } catch (error) {
      console.log(`fetchPokemons Error: ${error}`);
    }
  };
  useEffect(() => {
    fetchPokemons();
  }, [page]);
  return (
    <>
      <Navbar />
      <Searchbar />
      <Pokedex
        pokemons={pokemons}
        loading={loading}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default App;
