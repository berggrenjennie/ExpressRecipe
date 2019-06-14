//core functionality from react
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//existing component imports
import DashBoardScreen from './screens/DashBoardScreen';
import LoginScreen from './screens/LoginScreen';
import UserScreen from './screens/UserScreen';
import AdminScreen from './screens/AdminScreen';
import RecipeListScreen from './screens/RecipeListScreen';
import CategoryScreen from './screens/CategoryScreen';

import NavBarComponent from './components/NavBarComponent';
import FooterComponent from './components/FooterComponent';
import RecipeComponent from './components/RecipeComponent';
import SearchComponent from './components/SearchComponent';

//CSS imports
import './App.css';

class App extends Component {
  /*We render the Router and NavBarComponent.*/
  render() {
    return (
      <div>
        <Router>
          <NavBarComponent/>
          <SearchComponent/>
          <Route path="/" exact component={CategoryScreen} />
          {/*<Route exact path="/" component={LoginScreen} />*/}
          <Route path="/adminpage" component={AdminScreen} />
          <Route path="/dashboard" component={DashBoardScreen} />
          <Route path="/recipeList" component={RecipeListScreen} />
          {/*Make router to UserScreen.*/}
          {/*<Route path="/user/" exact component={UserScreen} />*/}
          {/*Make a router to UserScreen and this holds the id of the user as a parameter.*/}
          {/*<Route path="/user/:id" component={UserScreen} />*/}
        </Router>
        <FooterComponent/>
      </div>
    );
  }
}

export default App;
