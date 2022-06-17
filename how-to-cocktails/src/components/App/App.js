import './App.css';
import {useState, useEffect} from 'react';
import DisplayCocktail from '../DisplayCocktail';
import RandomSearch from '../RandomSearch';
import SearchByName from '../SearchByName';


function App() {
  const [cocktails, setCocktails] = useState([]);

console.log(cocktails[0])

  function updateCocktail(drink) {
    console.log(drink)
    setCocktails(drink);
  }

  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const data = await response.json();
      setCocktails(data.drinks);
    }
    fetchAPI();
  }, []);

  return (
    <div className="App">
      <SearchByName handleClick={updateCocktail} />
      <RandomSearch handleClick={updateCocktail} />
      <h1>HOW TO COCKTAILS</h1>
      {cocktails[0] !== undefined && <DisplayCocktail cocktail={cocktails[0]} />}
    </div>
  );
}

export default App;
