import React from 'react';

const Search = (props) => {
  return (
    <div>
      <input
      type='search'
      className='search'
      onChange={props.handleChange}></input>
      <button onClick={props.handleClick}>Search</button>
    </div>
  )
}

export default Search;