import './App.css';
import {useState, useEffect} from 'react';
import DisplayCocktail from '../DisplayCocktail';
import RandomSearch from '../RandomSearch';
import SearchByName from '../SearchByName';


function App() {
  const [cocktails, setCocktails] = useState([]);

console.log(cocktails);

  function updateCocktail(drink) {
    console.log(drink)
    setCocktails(drink);
  }

  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const data = await response.json();
      setCocktails(drinks);
    }
    fetchAPI();
  }, []);

  return (
    <div className="container px-4 mx-auto bg-licorice text-white">
      <header>
        {/* TODO: WORKING ON THE HEADER TEXT */}
        <h1 className="font-bold text-screaming-green-100 text-shadow-green-neon">HOW TO COCKTAILS</h1>
        <SearchByName handleClick={updateCocktail} />
        <RandomSearch handleClick={updateCocktail} />
      </header>
      <main>
      {cocktails[0] !== undefined && <DisplayCocktail cocktail={cocktails[0]} />}
      </main>
      <footer>
        <p className="pt-4 pb-2 text-center">All rights reserved 2022-23</p>
      </footer>
    </div>
  );
}

export default App;
