/* withHTTPRequests ia a Higher-order component:
which is a function that takes a component and returns a new component.
This has a state : recipeList which is an array, and
fetchrecipes which is a method used to fetch the recipes data from API.
*/

import React, { Component } from 'react';
import axios from 'axios';
export default function withHTTPRequests(WrappedComponent, selectData) {

    return class extends Component {
      constructor(props){
        super(props);
        this.state = {
            recipeList:[],
        }
      }


      getRecipes = () => {
        axios.get('http://localhost:2000/recipes')
          .then(response =>
            this.setState({
              recipeList: response.data
           })
        );
      }

      render() {
        /*we pass through WrappedComponent a method fetchrecipes and recipeList as props*/
        return (
          <WrappedComponent
            getRecipes={this.getRecipes}
            recipeList={this.state.recipeList}
            {...this.props}
          />
        )
      }
    };
  }
