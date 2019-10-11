import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';
import giphy from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: '3ohc0R5MH4pjQrTu3m'
    };
  }

  search = (query) => {
    giphy('aDKnJ36EWe3DUqjepLr5DE7DgF0GYsJv').search({
      q: query,
      rating: 'g',
      limit: 12
    }, (error, result) => {
    // Res contains gif data!
      this.setState({
        gifs: result.data
      });
    });
  }

  chooseGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    const gifs = [
      { id: "f7HN9OpT3DP02rpJDk" },
      { id: "Ypwd9pfTX7ASbAZhSW" }
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} chooseGif={this.chooseGif} />
        </div>
      </div>
    );
  }
}

export default App;
