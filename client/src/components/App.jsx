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
        {title: 'Ex Machina'},
      ],
      searchField: ''
    }
    this.addMovie = this.addMovie.bind(this);
  }

  addMovie(movie) {
    const movies = [...this.state.movies]
    movies.push(movie);
    this.setState({
      movies
    });
  }

  render() {
    const  { movies, searchField } = this.state;
    const filteredMovies = movies.filter(title => (
      title.title.toLowerCase().includes(searchField.toLowerCase())));
    return (
      <div>
        <Search handleChange={(event) => this.setState({searchField: event.target.value})} />
        <AddMovie add={this.addMovie}/>
        {filteredMovies.map((movie, idx) => (
        <MovieList key={idx} movieName={movie.title} />
        ))}
      </div>
    )
  }
}


export default App;