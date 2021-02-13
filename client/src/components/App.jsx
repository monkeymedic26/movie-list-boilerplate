import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'}
      ],
      searchField: ''
    };
    this.addMovie = this.addMovie.bind(this);
    // this.editSearchTerm = this.editSearchTerm.bind(this);
    // this.dynamicSearch = this.dynamicSearch.bind(this);
  }

    addMovie(movie) {
      const movies = [...this.state.movies]
      movies.push(movie);
      this.setState({
        movies
      });
    }

  render() {
    const {movies, searchField} = this.state;
    const filteredMovies = movies.filter(title => (
      title.title.includes(searchField)
    ))
    return (
    <div>
      <h2>Movie List!</h2>
      <div>
        <AddMovie addMovie={this.addMovie}/>
        <Search
        placeholder='Search Here'
        handleChange={(event) => this.setState({searchField: event.target.value})}
        />
        <MovieList movies={filteredMovies}/>
      </div>
      <div>
      </div>
    </div>
    );
  }

}

export default App;