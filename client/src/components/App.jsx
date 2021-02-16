import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import Watch from './WatchButton'

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
      searchField: '',
      watched: [],
      toWatch: []
    };
    this.addMovie = this.addMovie.bind(this);
    this.buttonTextChange = this.buttonTextChange.bind(this);
  }

    addMovie(movie) {
      const movies = [...this.state.movies]
      movies.push(movie);
      this.setState({
        movies
      });
    }

    buttonTextChange(event) {
      console.log('button pressed')
      let buttonText = this.state.status == 'Unwatched' ? 'Watched' : 'Unwatched'
      this.setState({
        buttonText: buttonText
      })
    }

  render() {
    const {movies, searchField} = this.state;
    const filteredMovies = movies.filter(title => (
      title.title.toLowerCase().includes(searchField.toLowerCase())));
    return (
    <div>
      <h2>Movie List!</h2>
      <div>
        <AddMovie addMovie={this.addMovie}/>
        <Search
        placeholder='Search Here'
        handleChange={(event) => this.setState({searchField: event.target.value})}
        />
        <Watch />
        {filteredMovies.map((movie, idx) => (
          <MovieList key={idx} movieName={movie.title} />
        ))}
      </div>
      <div>
      </div>
    </div>
    );
  }

}

export default App;