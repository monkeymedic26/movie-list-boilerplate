import React from 'react';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      movieEntries: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'}
      ]
    };
    this.addMovie = this.addMovie.bind(this);
  }

    addMovie (movie) {
      let tempArray = this.state.movieEntries;
      tempArray.push(movie);
      this.setState({movieEntries: tempArray});
    }

  render() {
    return (
    <div>
      <h2>Movie List!</h2>
      <div>
        <Search addMovieItem={this.addMovie}/>
      </div>
      <div>
        <MovieList movieEntries={this.state.movieEntries}/>
      </div>
    </div>
    );
  }

}

export default App;