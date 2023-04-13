import {useState} from 'react';


function SearchByName({handleClick}) {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className='flex gap-x-2 max-sm:mb-1'>
      <label className='w-3/4' htmlFor="search-by-name">
        <input        
          className='w-full border-2 border-white rounded mr-1 p-1 text-licorice' 
          id="search-by-name" 
          type="text" onChange={handleChange} 
          placeholder='Search by name' />
      </label>
      <button
        className='relative grow w1/4 border-2 border-screaming-green-100 rounded-md py-1 px-2 hover:shadow-screaming-green overflow-hidden transition-shadow'
        onClick={() => {
          if (text !== '') {
            handleClick(`search.php?s=${text}`)
          }
        }}
      >
        <span className='block absolute -inset-0 rounded-sm hover:shadow-inner-screaming-green transition-shadow' aria-hidden="true"></span>
        Search
      </button>
    </div>
  );
}

export default SearchByName;