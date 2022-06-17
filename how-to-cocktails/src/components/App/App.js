import './App.css';
import {useState, useEffect} from 'react';
//import RandomSearch from '../RandomSearch';
import Image from '../Image';
import Instructions from '../Instructions';


function App() {
  const [cocktails, setCocktails] = useState([]);

console.log(cocktails[0])

  function updateCocktail(drink) {
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
      <h1>HOW TO COCKTAILS</h1>
      {cocktails[0] !== undefined &&
      <div>
      <Image src={cocktails[0].strDrinkThumb}/>
      <Instructions instructions={cocktails[0].strInstructions} />
      </div>}
      {/* <RandomSearch handleClick={updateCocktail} /> */}
    </div>
  );
}

export default App;
