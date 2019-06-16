/*
DashBoardScreen is a class component which renders DashBoardComponent.
*/
import React, { Component } from 'react';
import DashBoardComponent from '../components/DashBoardComponent'
import axios from 'axios';

class DashBoardScreen extends Component {

  constructor(props) {
    super(props);
      this.state={
        recipeList:[],
      }
  }

  componentDidMount(){
    const {
        match: {
          params
        }
      } = this.props;

    let recipeId = params.id;

    axios.get('http://localhost:2000/recipes/'+recipeId)
    .then(response =>
      this.setState({
        recipeList: response.data
     })
   );

  }

  render() {
      return (
        <DashBoardComponent recipe={this.state.recipeList}/>
      );
  }
}

export default DashBoardScreen;
