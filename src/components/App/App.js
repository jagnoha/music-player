import React, {Component} from 'react';
import './App.css';
import MediaQuery from 'react-responsive';
import SongList from '../SongList/SongList.js';
import SearchBar from '../SearchBar/SearchBar.js';
import MediaPlayer from '../MediaPlayer/MediaPlayer';
import { FaSpinner } from 'react-icons/fa';
import Spinner from '../../assets/spinner.gif';



class App extends Component {

  state = {
    termSearch: "",
    resultListSong: {"resultCount":0, "results": []},
    selectedSong: null,
    processingSearch: false,
    playingSong: null,
    song: null,
  }

  changeTermSearch = (e) => {
    this.setState({
      termSearch: e.target.value
    })
  }

  setSelectedSong = (id, previewUrl) => {
    
   this.setState(  (state, props) => {
      
      if (state.song !== null){
        state.song.pause()
      }

      return {
          selectedSong: { id, previewUrl },
          song: new Audio(previewUrl),
        }
      }
    )
    
  }

  setSelectedSongAndPlay = (id, previewUrl) => {
    
    this.setState(  (state, props) => {
       
       if (state.song !== null){
         state.song.pause()
       }

       let audio = new Audio(previewUrl);

       audio.play();
 
       return {
           selectedSong: { id, previewUrl },
           song: audio,
           playingSong: { id, playing: true },
         }
       }
     )
     
   }


  searchByTerm = () => {

    this.setState({
      processingSearch: true,

    })

    fetch(`https://itunes.apple.com/search?term=${this.state.termSearch.replace(" ", "+")}&
    entity=song&media=music&attribute=artistTerm`)
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

  playSong = () => {
    
    if (this.state.song){
      this.state.song.play();
      this.setState({
        playingSong: {...this.state.playingSong, "playing": true }
      })
    }
  }

  pauseSong = () => {
    
    if (this.state.song){
      this.state.song.pause();
      this.setState({
        playingSong: {...this.state.playingSong, "playing": false }
      })
    }
  }

    
  render() {

    return (
      <div className="App">

      <header>
        
        

          <MediaQuery query="(max-width: 900px)">
          <div className="mobile-container">
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
              setSelectedSong = {this.setSelectedSongAndPlay} 
              selectedSong = {this.state.selectedSong}
              playingSong = {this.state.playingSong}
             /> :
             <div className="icon">
                
                <img src={Spinner} width="80px" />

              </div>
            }

            {this.state.song !== null &&
             <div className="fixed-footer">
                <MediaPlayer 
                  pauseSong = {this.pauseSong}
                  playSong = {this.playSong}
                />
             </div>
            }
          </div>
            
          </MediaQuery>

          <MediaQuery query="(min-width: 901px)">


          <div className="desktop-container">

           <div className="desktop-panel-left">

            <div className="desktop-header">
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
                playingSong = {this.state.playingSong}
               /> :
               <div className="spinner">
                
                  <img src={Spinner} width="80px" />

               </div>
             }

             </div>

           </div>
          
          
          </MediaQuery>
      </header>
        
      </div>
  );

  }
}

export default App;
