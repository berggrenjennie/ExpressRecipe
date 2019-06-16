//core functionality from React & Bootstrap
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

//existing component imports
import CardComponent from '../components/CardComponent';
import categoryList from '../data/categoryList';
import SearchComponent from '../components/SearchComponent';

//CSS imports
import '../styles/Category.css'

export default class CategoryScreen extends Component {
  render() {
    return (
      <Fragment>
      <SearchComponent/>
      <div className="main">
        {categoryList.map((category, index) => {
          return (
            <div>
              <Link to={"/recipeList/"+category.name}  className="link" style={{textDecoration: 'none'}}><CardComponent key={index} category={category}/></Link>
            </div>
          )
        })}
      </div>
      </Fragment>
    )
  }
}
