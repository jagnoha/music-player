import React, {Component} from 'react';
import './App.css';
import MediaQuery from 'react-responsive';
import SongList from '../SongList/SongList.js';
import SearchBar from '../SearchBar/SearchBar.js';
import MediaPlayer from '../MediaPlayer/MediaPlayer';
import { FaSpinner, FaSpin } from 'react-icons/fa';



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

  setSelectedSong = (id) => {
    this.setState({
      selectedSong: id,
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
        selectedSong: null,
        processingSearch: false,
      })
    })
    .catch(error => {
      this.setState({
        resultListSong: {"resultCount":0, "results": []},
        selectedSong: null,
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
            
            { !this.state.processingSearch ?
            <SongList 
              resultListSong = {this.state.resultListSong} 
              setSelectedSong = {this.setSelectedSong} 
              selectedSong = {this.state.selectedSong}
             /> :
             <div className="icon">
                <FaSpinner className="rotate-icon" size="30px" />
              </div>
            }

            { this.state.selectedSong !== null &&
             <div className="fixed-footer">
                <MediaPlayer />
             </div>
            }
            
            

              
            
            
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
