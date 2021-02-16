import React from 'react';


class MovieList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      status: 'Unwatched'
    }
    this.buttonTextChange = this.buttonTextChange.bind(this);
  };

  buttonTextChange(event) {
    console.log('button pressed')
    let buttonText = this.state.status == 'Unwatched' ? 'Watched' : 'Unwatched'
    this.setState({
      status: buttonText
    })
  }

  render() {
    return (
      <ul>
        <li>{this.props.movieName}</li>
        <button onClick={this.buttonTextChange}>{this.state.status}</button>
      </ul>
    )

  }
}


// MovieList.propTypes = {
//   movies: PropTypes.array.isRequired
// }

export default MovieList;