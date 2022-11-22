import "./App.css";
import Navbar from "./components/navbar/Navbar.component";
import Pokedex from "./components/pokedex/Pokedex";
import Searchbar from "./components/searchbar/Searchbar.component";
import { useEffect, useState } from "react";
import { getPokemons, getPokemonsData, searchPokemon } from "./api";
import { FavoriteProvider } from "./context/favorites-context";

const favoritesKey = 'f'

const App = () => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [favorites, setFavorites] = useState([])
  const [notFound, setNotFound] = useState([])

  const itensPerPage = 25
  
  const loadFavoritePokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey)) || []
    setFavorites(pokemons)
  }
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

  useEffect(() => {
    loadFavoritePokemons();
  }, []);


  const setFavoritePokemons = (name) => {
    const updatedFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(name)
    if(favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1)
    } else {
      updatedFavorites.push(name)
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites)
  }

  const onSearchHandler = async (pokemon) => {
    if(!pokemon) {
     return fetchPokemons()
    }

    setLoading(true)
    setNotFound(false)
    const result = await searchPokemon(pokemon)
    if(!result) {
      setNotFound(true)
    } else {
      setPokemons([result])
      setPage(0)
      setTotalPages(1)
    }
    setLoading(false)
  }
  return (
    <FavoriteProvider value={{favoritePokemons:favorites, setFavoritePokemons:setFavoritePokemons}}>
      <>
        <Navbar />
        <Searchbar onSearch={onSearchHandler}/>
        {notFound ? (<div className="not-found-text">Meteu essa?!</div>) : <Pokedex
          pokemons={pokemons}
          loading={loading}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />}
      </>
    </FavoriteProvider>
  );
};

export default App;
