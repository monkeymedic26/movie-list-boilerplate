import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.add(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input name="title"
          value={this.state.title}
          placeholder="Movie Title"
          onChange={this.handleChange}
          ></input>
          <button>Add Movie</button>
        </label>
      </form>
    )
  }
}

export default AddMovie;