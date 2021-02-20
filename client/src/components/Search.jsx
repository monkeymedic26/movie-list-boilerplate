import React from 'react';

const Search = (props) => {
  return (
    <div>
      <input
      type='search'
      className='search'
      onChange={props.handleChange}></input>
      <button>Search</button>
    </div>
  )
}

export default Search;