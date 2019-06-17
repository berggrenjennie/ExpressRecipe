//core functionality from react
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//existing component imports
import NavBarComponent from './components/NavBarComponent';
import FooterComponent from './components/FooterComponent';
import AboutComponent from './components/AboutComponent';
import UserComponent from './components/UserComponent';

import DashBoardScreen from './screens/DashBoardScreen';
import AdminScreen from './screens/AdminScreen';
import RecipeListScreen from './screens/RecipeListScreen';
import CategoryScreen from './screens/CategoryScreen';
import SuperUserScreen from './screens/SuperUserScreen';

//CSS imports
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <NavBarComponent/>
          <UserComponent/>
          <Route path="/" exact component={CategoryScreen} />
          <Route path="/home" exact component={CategoryScreen} />
          <Route path="/about" component={AboutComponent} />
          <Route path="/adminpage" component={AdminScreen} />
          <Route path="/superuserpage" component={SuperUserScreen} />
          <Route path="/dashboard/:id" component={DashBoardScreen} />
          <Route path="/recipeList/:category" component={RecipeListScreen} />
        </Router>
        <FooterComponent/>
      </div>
    );
  }
}
export default App;
