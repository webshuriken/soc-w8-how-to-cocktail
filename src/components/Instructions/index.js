import React from "react";

function Instructions({instructions, glassType, isAlcoholic}) {
  const drinkType = isAlcoholic === 'Alcoholic' ? 'Cocktail' : 'Mocktail';
  return (
    <div className='relative border-2 border-cocktail-fuchsia-100 rounded-lg p-4 shadow-cocktail-fuchsia overflow-hidden'>
      <span className='block absolute -inset-0 rounded-md shadow-inner-cocktail-fuchsia' aria-hidden="true"></span> 
      <h3 className='text-shadow-cocktail-fuchsia-neon font-bold'>Instructions - {drinkType}</h3>
      <p>Glass Type: {glassType}</p>
      <p>{instructions}</p>
    </div>
  )
}

export default Instructions;