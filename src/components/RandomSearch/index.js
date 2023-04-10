import React from 'react';


function RandomSearch({handleClick}) {
  async function fetchAPI() {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const data = await response.json();
    handleClick(data.drinks);
  }

  return (
    <button onClick={fetchAPI}>RANDOM COCKTAIL</button>
  )
}

export default RandomSearch;