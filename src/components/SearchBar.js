import React from 'react';

class SearchBar extends React.Component {
  state = {
    query: ''
  };

  onInputChange = event => {
    // take user input, assign to state
    // setState will call render
    this.setState({ query: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    // Callback from parent component to retrieve query value
    this.props.onQuerySubmit(this.state.query);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui fluid action input">
            <input
              type="text"
              value={this.state.query}
              onChange={this.onInputChange}
              placeholder="Search Videos..."
            />
            <div onClick={this.onFormSubmit} className="ui button">
              Search
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
