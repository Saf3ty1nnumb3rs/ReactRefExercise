import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: ""
  };

  onFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui field">
            <label htmlFor="">Image Search</label>
            <input
              className="ui"
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
