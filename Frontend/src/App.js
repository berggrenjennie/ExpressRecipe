//core functionality from react
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//existing component imports
import LoginComponent from './components/LoginComponent';
import NavBarComponent from './components/NavBarComponent';
import FooterComponent from './components/FooterComponent';
import RecipeComponent from './components/RecipeComponent';
import AboutComponent from './components/AboutComponent';

import DashBoardScreen from './screens/DashBoardScreen';
import UserScreen from './screens/UserScreen';
import AdminScreen from './screens/AdminScreen';
import RecipeListScreen from './screens/RecipeListScreen';
import CategoryScreen from './screens/CategoryScreen';
import SuperUserScreen from './screens/SuperUserScreen';

//CSS imports
import './App.css';
import DashBoardComponent from './components/DashBoardComponent';

class App extends Component {
  /*We render the Router and NavBarComponent.*/
  constructor(props) {
    super(props);
    this.state = {
      userPermission:"user"
    }
  }
  componentDidMount() {
    this.setState({
      userPermission: localStorage.getItem('user')
    });
  }
  render() {
    const {
      userPermission
    } = this.state
    return (
      <div>
        <Router>
          <NavBarComponent/> 
          <DashBoardScreen/>
          <Route path="/" exact component={CategoryScreen} />
          <Route path="/about" component={AboutComponent} />
          {/*<Route path="/" exact component={LoginComponent} />*/}
          <Route path="/adminpage" component={AdminScreen} />
          <Route path="/superuserpage" component={SuperUserScreen} />
          <Route path="/dashboard" component={DashBoardScreen} />
          <Route path="/recipeList" component={RecipeListScreen} />
        </Router>
        <FooterComponent/>
      </div>
    );
  }
}
export default App;