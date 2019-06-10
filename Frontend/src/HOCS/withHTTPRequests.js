/* withHTTPRequests ia a Higher-order component:
which is a function that takes a component and returns a new component.
This has a state : recipeList which is an array, and
fetchrecipes which is a method used to fetch the recipes data from API.
*/

import React, { Component } from 'react';
export default function withHTTPRequests(WrappedComponent, selectData) {

    return class extends Component {
      constructor(props){
        super(props);

        this.state = {
            recipeList:[],
        }
      }

      fetchrecipes = () => {
        fetch('http://localhost:2000/recipes')
        .then((response)=> response.json().then((response)=>{
          this.setState({recipeList:response});
        }));
      }

      render() {
        /*we pass through WrappedComponent a method fetchrecipes and recipeList as props*/
        return (
          <WrappedComponent
            fetchrecipes={this.fetchrecipes}
            recipeList={this.state.recipeList}
            {...this.props}
          />
        )
      }
    };
  }
