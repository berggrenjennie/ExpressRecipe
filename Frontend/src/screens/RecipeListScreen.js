// Core functionality from React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Existing component imports
import RecipeComponent from '../components/RecipeComponent';

// CSS imports

export default class RecipeListScreen extends Component {
  render() {
    return (
        <RecipeComponent/>
    )
  }
}