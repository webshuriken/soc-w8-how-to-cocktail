import {useState} from 'react';


function SearchByName({handleClick}) {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  async function fetchAPI() {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`);
    const data = await response.json();
    handleClick(data.drinks);
  }

  return (
    <div className='flex gap-x-2 max-sm:mb-1'>
      <label className='w-3/4' htmlFor="search-by-name">
        <input
          className='w-full border-2 border-screaming-green-400 rounded mr-1 p-1' 
          id="search-by-name" 
          type="text" onChange={handleChange} 
          placeholder='Search by name' />
      </label>
      <button
        className='grow w1/4 border-2 border-screaming-green-400 rounded py-1 px-2'
        onClick={() => {
          if (text !== '') {
            fetchAPI()
          }
        }}
      >Search</button>
    </div>
  );
}

export default SearchByName;