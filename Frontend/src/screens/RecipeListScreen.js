// Core functionality from React
import React, { Component,Fragment } from 'react';

// Existing component imports
import SearchComponent from '../components/SearchComponent';
import RecipeCardComponent from '../components/RecipeCardComponent';
import axios from 'axios';

// CSS imports
import '../styles/Recipe.css'

export default class RecipeListScreen extends Component {
  constructor(props) {
  super(props);
  this.state={
    recipeList:[]
  }
}

componentDidMount(){
  const {
      match: {
        params
      }
    } = this.props;

  let categryName = params.category;
  axios.get('http://localhost:2000/recipes?category='+categryName)
  .then(response =>
    this.setState({
      recipeList: response.data
   })
  );
}
  render() {
    const {
      recipeList
    } = this.state;
    return (
      <Fragment>
        <SearchComponent/>
        <div>
        <h1 className="">Kategori Namn : {this.props.match.params.category}</h1>
        <hr/>
        <br/>
        { recipeList.map((recipe) => {
              return (
                <div className="recipeListCard">
                    <RecipeCardComponent key={recipe._id} recipe={recipe}/>
                </div>
              )
            })
         }
        </div>
      </Fragment>
    )
  }
}
