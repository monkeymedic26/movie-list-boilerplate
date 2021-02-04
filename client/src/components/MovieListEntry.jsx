import React from 'react';


const MovieListEntry = ({movie}) => (
  <div className="movie-list item">
    <div className="movie-list title">{movie.tiitle}</div>
  </div>
);


// MovieListEntry.propTypes = {
//   movie: PropTypes.object.isRequired
// }
export default MovieListEntry;