import React from 'react';
import './SongItem.css';
import wavIcon from '../../assets/wav.gif';



const SongItem = (props) => {
  
  const onSelectedSong = (e) => {
    props.setSelectedSong(props.id, props.previewUrl);
    e.preventDefault();
    console.log(props.id);
  }

  

  //let itemSelectedStyle = props.selectedSong !== null && props.selectedSong.id !== props.id ? "SongItem-container" : "SongItem-container-selected";
  let itemSelectedStyle = props.selectedSong !== null && 
  props.selectedSong.id === props.id ? "SongItem-container-selected" : "SongItem-container";
  
  return (
    
    <tr className = {itemSelectedStyle} onClick={onSelectedSong}>
      <td ><img className= "SongItem-image-album" src={`${props.artworkUrl100}`}></img></td>
      <td className="SongItem-info">
        <tr>
          <h4 className="SongItem-track-name">{props.trackName} 
          
          
          
          
          </h4>
        </tr>  
        <tr>
          {props.artistName}
        </tr>
        <tr>
          <small className="SongItem-album-name">{props.albumName}</small>
        </tr>
        
       </td> 
       <td className="SongItem-playing">

           { props.playingSong !== null && props.playingSong.id === props.id && props.playingSong.playing === true &&
                  <span><img width="40px" src={wavIcon} /></span>
          }
         
       </td>
            
    </tr>
    


  ) 
  
}

export default SongItem;
