import React from 'react';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);
    };

  render() {
    return (
    <div>
      <h2>Movie List!</h2>
      <div>
        <Search />
      </div>
      <div>
        <MovieList />
      </div>
    </div>
    );
  }

}

export default App;