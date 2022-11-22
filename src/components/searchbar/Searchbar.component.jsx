import "./Searchbar.styles.css";
import SearchIcon from '@mui/icons-material/Search';

import { useState } from "react";

const Searchbar = (props) => {
  const [search, setSearch] = useState("");
  const { onSearch } = props
  
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if(!e.target.value) {
      onSearch(undefined)
    }
  };

  const onButtonClickHandler = () => {
    onSearch(search)
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
    </>
  );
};

export default Searchbar;
