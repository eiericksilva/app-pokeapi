import "./Searchbar.styles.css";
import SearchIcon from '@mui/icons-material/Search';

import React, { useState } from "react";
import { searchPokemon } from "../../api";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon ] = useState();
  
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onButtonClickHandler = () => {
    onSearchHandler(search)
  }

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon)
    setPokemon(result)
    console.log(result)
  }

  return (
    <>
      <div className="searchbar-container">
        <div className="searchbar">
          <input placeholder="Search Pokemon" type="search" onChange={onChangeHandler} />
        </div>
        <div className="searchbar-btn">
          <SearchIcon onClick={onButtonClickHandler} className="searchbar-btn"/>
        </div>
      </div>
      
      { pokemon 
        ? (
          <div className="info-container">
            <div>Nome: {pokemon.name}</div>
            <div>Peso: {pokemon.weight}</div>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
          ) 
        : null}
    </>
  );
};

export default Searchbar;
