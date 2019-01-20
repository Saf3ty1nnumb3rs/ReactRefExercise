import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {
  state = {

  }

  async onSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term,
      },
      headers: {
        Authorization: 'Client-ID 1340e12fa6feb88d5fc00ebe6bbe9f2d4f80550b27d48de9147cd3407d7732d2',
      }
    });
    console.log(response.data.results);
  }

  render () {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
       <SearchBar onSubmit={this.onSearchSubmit} />
       <ImageList />
      </div>
    );
  }
  
}

export default App;