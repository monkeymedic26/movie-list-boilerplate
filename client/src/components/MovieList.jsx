import React from 'react';
import MovieListEntry from './MovieListEntry';

const MovieList = (props) => (
  <div className='movie-list names'>
    <ul>
      {props.movieEntries.map((movie, idx) =>(
        <li key={movie.title + idx}>{movie.title}</li>
      ))}
    </ul>
  </div>
);


// MovieList.propTypes = {
//   movies: PropTypes.array.isRequired
// }

export default MovieList;