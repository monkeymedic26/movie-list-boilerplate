import React from 'react';


const MovieList = (props) => (
  <div className='movie-list names'>
    <ul>
      {props.movies.map((movie, idx) =>(
        <li key={movie.title + idx}>{movie.title}</li>
      ))}
    </ul>
  </div>
);


// MovieList.propTypes = {
//   movies: PropTypes.array.isRequired
// }

export default MovieList;