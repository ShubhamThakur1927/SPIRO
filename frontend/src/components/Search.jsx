import React from 'react';

function Search() {
  return (
    <div className='w-full flex justify-center'>
      <input 
        type="text"
        placeholder='Search'
        className='w-1/2 shadow-lg h-10 my-10 rounded-full p-2 border-2 border-gray-300 focus:outline-none'
      />
    </div>
  );
}

export default Search;