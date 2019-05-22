import React, {Component} from 'react';
import './SongList.css';
import SongItem from '../SongItem/SongItem.js';

class SongList extends Component {

  
  render() {

    return (
      <div className="SongList-container">
         <table>
          {
            this.props.resultListSong.results.map(item => 
              <SongItem 
                id = {item.trackId}
                artistName = {item.artistName}
                trackName = {item.trackName}
                albumName = {item.collectionName}
                artworkUrl100 = {item.artworkUrl100}
                setSelectedSong = {this.props.setSelectedSong}
                selectedSong = {this.props.selectedSong}
              /> 
              
            )
          }
          </table>
          
        
      </div>
  );

  }
}

export default SongList;
