//core functionality from React
import React, {Component} from 'react';
import axios from 'axios';

//CSS imports
import '../styles/Category.css';

class CardComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      recipeList:[]
    }
  }
  
  componentDidMount(){
    let categryName = this.props.category.name;
  axios.get('http://localhost:2000/recipes?category='+categryName)
  .then(response =>
    this.setState({
      recipeList: response.data
   })
  );
}

  render() {
    const borderColor = this.props.category.hrColor;
    const numberColor = this.props.category.color;
    return (
      <div className="recipeList">
        <img src={this.props.category.image} alt="pic"/>
        <span>
          <p className="recipeName">{this.props.category.name}</p>
          <p className="recipeNr" style={{ color: numberColor }}>se alla {this.state.recipeList.length} recept</p>
        </span>
        <hr className="hr" style={{ border: borderColor }}/>
      </div>
    );
  }
}
export default CardComponent;
