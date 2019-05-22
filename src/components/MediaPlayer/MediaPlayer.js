import React, {Component} from 'react';
import './MediaPlayer.css';
import { FaPlay, FaStop } from 'react-icons/fa';

class MediaPlayer extends Component {

  handleSubmit = (e) => {
    this.props.searchByTerm();
    console.log(e)
    e.preventDefault();
  }
  
  render() {

    return (
      <div className="MediaPlayer-container">
       
       
        
          <FaStop size="25px" className="MediaPlayer-control" />
          <FaPlay size="25px" className="MediaPlayer-control" /> 
      </div>
  );

  }
}

export default MediaPlayer;
