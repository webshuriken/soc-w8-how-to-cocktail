import React from 'react';


function RandomSearch({handleClick}) {
  async function fetchAPI() {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const data = await response.json();
    handleClick(data.drinks);
  }

  return (
    <button 
      className='max-w-sm border-2 border-screaming-green-400 rounded max-sm:mt-1 py-1 px-2'
      onClick={fetchAPI}
    >Random Cocktail
    </button>
  )
}

export default RandomSearch;