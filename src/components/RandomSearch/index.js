import React from 'react';


function RandomSearch({handleClick}) {
  return (
    <button 
      className='relative grow w1/4 max-w-sm border-2 border-screaming-green-100 rounded-md max-sm:mt-1 py-1 px-2 hover:shadow-screaming-green overflow-hidden transition-shadow'
      onClick={() => {
        handleClick('random.php');
      }}
    >
      <span className='block absolute -inset-0 rounded-sm hover:shadow-inner-screaming-green transition-shadow' aria-hidden="true"></span>
      Random Cocktail
    </button>
  )
}

export default RandomSearch;