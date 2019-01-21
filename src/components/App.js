import React, { Component } from 'react';

// Components
import SearchBar from './SearchBar';
import ImageList from './ImageList';

// Utilities
import apiHelper from '../api/apiHelper';

class App extends Component {
  state = {
    images: [],
  }

  onSearchSubmit = async (term) => {
    try {
      const response = await apiHelper.get('/search/photos', {
      params: {
        query: term,
      },
      });

      this.setState({ 
        images: response.data.results,
      });
    }catch(err) {
        console.log(err.message);
      }
    }  

  render () {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
       <SearchBar onSubmit={this.onSearchSubmit} />
       Found: {this.state.images.length} images
       <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
