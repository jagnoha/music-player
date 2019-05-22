import React, {Component} from 'react';
import './SearchBar.css';
//import { FaSearch } from 'react-icons/fa';

class SearchBar extends Component {

  handleSubmit = (e) => {
    this.props.searchByTerm();
    console.log(e)
    e.preventDefault();
  }
  
  render() {

    return (
      <div className="SearchBar-container">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="search" placeholder="Search artist"
            onChange = {this.props.changeTermSearch}
            
            value = {this.props.termSearch}
          />
          </form>       
        
      </div>
  );

  }
}

export default SearchBar;
