import './App.css';
import Navbar from './components/navbar/Navbar.component';
import Pokedex from './components/pokedex/Pokedex';
import Searchbar from './components/searchbar/Searchbar.component';

const App = () => {

  return (
    <>
      <Navbar/>
      <Searchbar/>
      <Pokedex/>
    </>
  )
}

export default App;
