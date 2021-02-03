import React from 'react';
import MovieListEntry from './MovieListEntry'

const MovieList = (props) => (
  <div className='movie-list'>
    {movies.map((movie) =>
      <MovieListEntry
        movie={movie}
        key={movie.title}
      />
    )}
  </div>
);

export default MovieList