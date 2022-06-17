import './App.css';
import {useState, useEffect} from 'react';
import RandomSearch from '../RandomSearch';


function App() {
  const [cocktails, setCocktails] = useState([]);

  function updateCocktail(drink) {
    setCocktails([drink]);
  }

  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const data = await response.json();
      setCocktails([data.drinks]);
    }
    fetchAPI();
  }, []);

  return (
    <div className="App">
      <h1>HOW TO COCKTLS</h1>
      <RandomSearch handleClick={updateCocktail} />
    </div>
  );
}

export default App;
