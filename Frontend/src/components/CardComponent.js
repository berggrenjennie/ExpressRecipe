// Core functionality from React
import React, {Component} from 'react';

// CSS imports
import '../styles/Category.css'
import categoryList from '../data/categoryList';

class CardComponent extends Component {
  render() {
    const borderColor = this.props.category.hrColor;
    const numberColor = this.props.category.color;
    return (
      
      <div className="recipeList">
        <img src={this.props.category.image} alt="pic"/> 
        <span>
          <p className="recipeName">{this.props.category.name}</p> 
          <p className="recipeNr" style={{ color: numberColor }}>se alla {this.props.category.number} recept</p>  
        </span>
        <hr className="hr" style={{ border: borderColor }}/>
      </div>  
    );
  }
}
export default CardComponent;