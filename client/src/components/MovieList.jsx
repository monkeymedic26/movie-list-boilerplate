import React from 'react';

const MovieList = (props) => {
  return (
    <div>
      <ul>
        <li>{props.movieName}</li>
      </ul>
    </div>
  )

}

export default MovieList;