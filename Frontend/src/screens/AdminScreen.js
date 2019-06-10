/*
DashBoardScreen is a class component which renders AdminComponent.
*/
import React, { Component } from 'react';
import RecipesComponent from '../admincomponents/RecipesComponent'

class AdminScreen extends Component {
  render() {
      return (
        <RecipesComponent/>
      );
  }
}

export default AdminScreen;
