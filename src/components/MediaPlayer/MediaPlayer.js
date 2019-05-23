import React, {Component} from 'react';
import './MediaPlayer.css';
import { FaPlay, FaStop, FaPause } from 'react-icons/fa';

class MediaPlayer extends Component {

  onClickPause = () => {
    this.props.pauseSong()
  }
  
  onClickPlay = () => {
    this.props.playSong();    
  }

  render() {

    return (
      <div className="MediaPlayer-container">       
       
        
          <FaPause size="25px" className="MediaPlayer-control" onClick = {this.onClickPause}/>
          <FaPlay size="25px" className="MediaPlayer-control" onClick = {this.onClickPlay} /> 
      </div>
  );

  }
}

export default MediaPlayer;
