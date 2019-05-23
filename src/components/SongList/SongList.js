import React, {Component} from 'react';
import './SongList.css';
import SongItem from '../SongItem/SongItem.js';

class SongList extends Component {

  
  render() {

    return (
      <div className="SongList-container">
         <table>
          {
            this.props.resultListSong.results.filter(item => item.wrapperType === 'track' && item.collectionName).map(item => 
              <SongItem 
                id = {item.trackId}
                artistName = {item.artistName}
                trackName = {item.trackName}
                albumName = {item.collectionName}
                previewUrl = {item.previewUrl}
                artworkUrl100 = {item.artworkUrl100}
                setSelectedSong = {this.props.setSelectedSong}
                selectedSong = {this.props.selectedSong}
                playingSong = {this.props.playingSong}
              /> 
              
            )
          }
          </table>
          
        
      </div>
  );

  }
}

export default SongList;
