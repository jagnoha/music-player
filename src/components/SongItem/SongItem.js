import React from 'react';
import './SongItem.css';


const SongItem = (props) => {
  return (
    
    <tr className="SongItem-container">
      <td><img src={`${props.artworkUrl100}`}></img></td>
        <td>
        <tr>
          {props.trackName}
        </tr>  
        <tr>
          {props.artistName}
        </tr>
        <tr>
          <small>{props.albumName}</small>
        </tr>
        </td> 
        <td>
        </td>     
    </tr>
    


  ) 
  
}

export default SongItem;
