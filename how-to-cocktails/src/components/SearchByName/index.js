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
    <div>
      <label htmlFor="search-by-name">
        <span>Search by name</span>
        <input id="search-by-name" type="text" onChange={handleChange} />
      </label>
      <button onClick={() => {
        if (text !== '') {
          fetchAPI()
        }
      }}>Search</button>
    </div>
  );
}

export default SearchByName;