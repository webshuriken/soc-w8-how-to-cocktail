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
    <div className="container min-h-screen border-x-2 border-razzmatazz-200 px-4 lg:px-8 mx-auto bg-licorice text-white shadow-[0_0_16px_5px_rgba(243,23,112,0.6),_0_0_2px_1px_rgba(243,23,112,0.8)]">
      <header className='md:flex md:flex-row md:gap-4 md:justify-between md:pt-1'>
        <h1 className="py-2 font-bold text-screaming-green-100 text-shadow-green-neon">HOW TO COCKTAILS</h1>
        <div className="flex flex-col sm:flex-row sm:gap-x-2 pb-8">
          <SearchByName handleClick={updateCocktail} />
          <RandomSearch handleClick={updateCocktail} />
        </div>
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
