import React, {Component} from 'react';
import './FilterableSongList.css';
import MediaQuery from 'react-responsive';


class FilterableSongList extends Component {

  
  render() {

    return (
      <div className="App">
        
        <header className="App-header">

          <MediaQuery query="(max-width: 900px)">
            <p>Tablet or Mobile Phone</p>
          </MediaQuery>

          <MediaQuery query="(min-width: 901px)">
            <p>Desktop or Laptop</p>
          </MediaQuery>

        </header>
      </div>
  );

  }
}

export default FilterableSongList;
