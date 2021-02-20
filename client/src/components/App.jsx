import React from 'react';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ]
    }
  }

  render() {
    return (
      <div>
        <Search />
        {this.state.movies.map((movie, idx) => (
        <MovieList key={idx} movieName={movie.title} />
        ))}
      </div>
    )
  }
}


export default App;