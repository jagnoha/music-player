import React, {Component} from 'react';
import './App.css';
import MediaQuery from 'react-responsive';
import SongList from '../SongList/SongList.js';
import SearchBar from '../SearchBar/SearchBar.js';



class App extends Component {

  state = {
    termSearch: "",
    resultListSong: {"resultCount":0, "results": []},
    selectedSong: null,
    processingSearch: false,
  }

  changeTermSearch = (e) => {
    this.setState({
      termSearch: e.target.value
    })
  }

  searchByTerm = () => {

    this.setState({
      processingSearch: true,
    })

    fetch(`https://itunes.apple.com/search?term=${this.state.termSearch.replace(" ", "+")}&
    entity=song&media=music`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        resultListSong: json,
        processingSearch: false,
      })
    })
    .catch(error => {
      this.setState({
        resultListSong: {"resultCount":0, "results": []},
        processingSearch: false,
      })
    })
  }

    
  render() {

    return (
      <div className="App">
        
        <header className="App-header">

          <MediaQuery query="(max-width: 900px)">
            <div className="fixed-header">
              <SearchBar 
                termSearch = {this.state.termSearch} 
                changeTermSearch = {this.changeTermSearch}
                searchByTerm = {this.searchByTerm}
              />
            </div>
            <SongList resultListSong = {this.state.resultListSong} />
            
            
          </MediaQuery>

          <MediaQuery query="(min-width: 901px)">
            <p>Desktop or Laptop</p>
          </MediaQuery>

        </header>
      </div>
  );

  }
}

export default App;
