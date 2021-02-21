import React from 'react';

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'to watch'
    }
    this.statusChange = this.statusChange.bind(this);
  }

  statusChange(event) {
    event.preventDefault();
    let status = this.state.status === 'to watch' ? 'watched' : 'to watch'
    this.setState({
      status: status
    })
  }

  render() {
    return (
      <div>
      <ul>
      <li>{this.props.movieName}</li>
      <button onClick={this.statusChange}>{this.state.status}</button>
      </ul>
      </div>
    )
  }
}

export default MovieList;