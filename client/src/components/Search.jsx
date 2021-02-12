import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    event.preventDefault();
    this.props.add(this.state);
    console.log(this.state);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          name="value"
          className="form-control"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button className="btn hidden-sm-down">
          <span
          className="glyphicon glyphicon-search"
          onClick={this.handleSubmit}
          ></span>
        </button>
      </div>
    );
  }
}

export default Search;