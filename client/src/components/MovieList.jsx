import React from 'react';
import MovieListEntry from './MovieListEntry';

const MovieList = () => (
  <div className='movie-list names'>
    <ul>
      <li className='Mean-Girls'>Mean Girls</li>
      <li className='Hackers'>Hackers</li>
      <li className='The Grey'>The Grey</li>
      <li className='Sunshine'>Sunshine</li>
      <li className='Ex Machina'>Ex Machina</li>
    </ul>
  </div>
);


// MovieList.propTypes = {
//   movies: PropTypes.array.isRequired
// }

export default MovieList;