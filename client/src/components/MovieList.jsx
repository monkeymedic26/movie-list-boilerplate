import React from 'react';
import MovieListEntry from './MovieListEntry'
var MovieList = ({movies}) => (
  <div className='movie-list'>
    {movies.map((movie) => (
      <MovieListEntry
        movie={movie}
        key={movie.title}
      />
    ))}
  </div>
);

// MovieList.propTypes = {
//   movies: PropTypes.array.isRequired
// }

export default MovieList;