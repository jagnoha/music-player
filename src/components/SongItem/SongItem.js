import React from 'react';
import './SongItem.css';



const SongItem = (props) => {
  
  const onSelectedSong = (e) => {
    props.setSelectedSong(props.id);
    e.preventDefault();
    console.log(props.id);
  }

  let itemSelectedStyle = props.selectedSong !== props.id ? "SongItem-container" : "SongItem-container-selected";

  return (
    
    <tr className = {itemSelectedStyle} onClick={onSelectedSong}>
      <td ><img className= "SongItem-image-album" src={`${props.artworkUrl100}`}></img></td>
      <td className="SongItem-info">
        <tr>
          <h4 className="SongItem-track-name">{props.trackName}</h4>
        </tr>  
        <tr>
          {props.artistName}
        </tr>
        <tr>
          <small className="SongItem-album-name">{props.albumName}</small>
        </tr>
        
       </td> 
       <td>
       </td>
            
    </tr>
    


  ) 
  
}

export default SongItem;
