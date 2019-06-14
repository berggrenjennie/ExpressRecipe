//core functionality from React & Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//existing component imports
import CardComponent from '../components/CardComponent';
import categoryList from '../data/categoryList';

//CSS imports
import '../styles/Category.css'

export default class CategoryScreen extends Component {
  componentDidMount() {
    //console.log(categoryList)
  }
  render() {
    return (
      <div className="main">
        {categoryList.map((category, index) => {
          return (
            <div>
              <Link to="/recipeList" key={0} className="link" style={{textDecoration: 'none'}}><CardComponent category={category}/></Link>
            </div>
          )
        })}
      </div>
    )
  }
}