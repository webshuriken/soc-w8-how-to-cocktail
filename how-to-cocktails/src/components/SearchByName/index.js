import {useState} from 'react';


function SearchByName({handleClick}) {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <label htmlFor="search-by-name">
        <span>Search by name</span>
        <input id="search-by-name" type="text" onChange={handleChange} />
      </label>
      <button onClick={() => {
        if (text !== '') {
          handleClick(text)
        }
      }}>Search</button>
    </div>
  );
}

export default SearchByName;