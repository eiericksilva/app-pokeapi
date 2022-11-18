import "./Searchbar.styles.css";
import SearchIcon from '@mui/icons-material/Search';

import React, { useState } from "react";

const Searchbar = () => {
  const [search, setSearch] = useState("charizard");
  
  const onChange = (e) => {
    console.log(`pokemon: ${e.target.value}`);
    setSearch(e.target.value);
  };

  const onButtonClickHandler = () => {
    console.log(`pokemon: ${search}`)
  }
  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Search Pokemon" type="search" onChange={onChange} />
        <div>
          <SearchIcon onClick={onButtonClickHandler} className="searchbar-btn"/>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
