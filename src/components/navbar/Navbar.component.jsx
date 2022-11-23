import React, {useContext} from "react";
import './Navbar.styles.css'
import {FavoriteContext} from "../../context/favorites-context";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext)
  const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
  return (
    <nav className="nav-container">
      <div>
        <img
          src={logoImg}
          alt="pokeapi-logo"
          className="navbar-img"
        />
      </div>
      <div className="text-favorite-pokemons">{favoritePokemons.length}💘</div>
    </nav>
  );
};

export default Navbar;
