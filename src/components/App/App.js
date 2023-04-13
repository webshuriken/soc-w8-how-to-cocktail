import './App.css';
import {useState, useEffect} from 'react';
import DisplayCocktail from '../DisplayCocktail';
import RandomSearch from '../RandomSearch';
import SearchByName from '../SearchByName';


function App() {
  const [cocktails, setCocktails] = useState([]);

  async function fetchCocktails(path) {
    console.log("YOU ARE FETCHING");
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/${path}`);
    const data = await response.json();
    const drinks = data.drinks[0];
    // create a list of ingredients with their measurements
    let cocktailIngredients = [];
    for (let i=1; i < 16; i++) {
      if (drinks[`strIngredient${i}`] !== null) {
        cocktailIngredients.push({
          ingredient: drinks[`strIngredient${i}`],
          measure: drinks[`strMeasure${i}`],
        });
      }else{
        break;
      }
    }
    // prep the cocktail info
    const newCocktail = {
      id: drinks.idDrink,
      name: drinks.strDrink,
      isAlcoholic: drinks.strAlcoholic,
      glass: drinks.strGlass,
      imageSrc: drinks.strImageSource,
      instructions: drinks.strInstructions,
      ingredients: cocktailIngredients
    }
    // update state
    setCocktails(() => newCocktail);
  }

  useEffect(() => {
    async function fetchAPI() {
      fetchCocktails('random.php');
    }
    fetchAPI();
  }, []);

  return (
    <div className="container flex flex-col min-h-screen border-x-2 border-razzmatazz-200 px-4 lg:px-8 mx-auto bg-licorice text-white shadow-[0_0_16px_5px_rgba(243,23,112,0.6),_0_0_2px_1px_rgba(243,23,112,0.8)]">
      <header className='md:flex md:flex-row md:gap-4 md:justify-between md:pt-1'>
        <h1 className="py-2 font-bold text-screaming-green-100 text-shadow-green-neon">HOW TO COCKTAILS</h1>
        <div className="flex flex-col sm:flex-row sm:gap-x-2 pb-8">
          <SearchByName handleClick={fetchCocktails} />
          <RandomSearch handleClick={fetchCocktails} />
        </div>
      </header>
      <main className='grow pb-4'>
      {cocktails[0] !== undefined && <DisplayCocktail cocktail={cocktails[0]} />}
      </main>
      <footer>
        <p className="pt-4 pb-2 text-center">All rights reserved 2022-23</p>
      </footer>
    </div>
  );
}

export default App;
