//core functionality from React
import React, {Component} from 'react';

//CSS imports
import '../styles/Search.css'

class SearchComponent extends Component {
  render() {
    return (
        <div className="index-search-bar">
            <h1>Vad är du sugen på i dag?</h1>
            <form>
                <input type="text" placeholder="Sök bland recept.." name="search"/>
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        </div>    
    );
  }
}
export default SearchComponent;