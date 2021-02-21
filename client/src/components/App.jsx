import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [{title: ''}],
      searchField: ''
    }
    this.addMovie = this.addMovie.bind(this);
  }

  componentDidMount() {
    this.getAllMovies()
  }

  getAllMovies() {
    axios.get('/api')
      .then(response => {
        console.log(response);
        this.setState({movies: response.data})
      })
      .catch(err => {
        console.log(err);
      })
  }

  addMovie(movie) {
    axios.post('/api', movie)
    .then(response => {
      console.log(response);
      this.getAllMovies();
    })
    .catch(err => {
      console.log(err);
    })
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
        <MovieList key={idx} movieName={movie.title} status={this.state.status}/>
        ))}
      </div>
    )
  }
}


export default App;