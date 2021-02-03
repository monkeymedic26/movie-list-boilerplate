import React from 'react';
import movieEntriesExample from './movieEntriesExample.jsx'

const MovieListEntry = ({movies}) => (
  <div className="movie-list item">
    <div className="movie-list title">{movie.tiitle}</div>
  </div>
);

// MovieListEntry.propTypes = {
//   movie: PropTypes.object.isRequired
// }
export default MovieListEntry;