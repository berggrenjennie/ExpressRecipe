/*
DashBoardScreen is a class component which renders AdminComponent.
*/
import React, { Component } from 'react';
import RecipesComponent from '../admincomponents/RecipesComponent'

class SuperUserScreen extends Component {
  render() {
      return (
          <RecipesComponent permission="superuser"/>
      );
  }
}

export default SuperUserScreen;
