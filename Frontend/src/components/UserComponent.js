import React, { Component,Fragment } from 'react';
import {Button, Form} from 'react-bootstrap';

import withStorage from './../HOCS/withStorage';
import axios from 'axios';
import PropTypes from "prop-types";
import '../styles/Login.css';

class UserComponent extends Component {
  static propTypes = {
    history: PropTypes.object,
    match: PropTypes.object,
    location: PropTypes.object,
    getUser: PropTypes.func,
    getUsers: PropTypes.func,
    addUser: PropTypes.func,
    login: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'',
      emailLogin: '',
      passwordLogin: '',
      userData: [],
      error:false,
      caughtError:false,
      showLoginForm: true,
      showRegisterForm: false,
      showSidebar: true
    }
  }

/*A method which controls and changes the value of the input field in the form by using setState */
handleInputChange = name => event => {
  const state = {};
  state[name] = event.target.value;
  this.setState(state);
};


componentDidMount(){
  axios.get('http://localhost:2000/users/')
      .then(response => this.setState({ userData: response.data }));

}

/*A method which sets the value of the input field in localStorage, and navigates to the dashboard using History.*/
Login = (e) => {
  const user = this.state.userData.reduce((prev, user) => {
    return user.email === this.state.emailLogin &&
      user.password === this.state.passwordLogin
      ? user
      : prev;
  }, undefined);
  if (user === undefined) {
    this.setState({ error: true });
    return;
  }
  this.props.login(user._id);
  this.props.history.push('/home');
  this.setState({
    showSidebar:false
  });
}

  showRegisterForm = (e) => {
    this.setState({
      showLoginForm:false,
      showRegisterForm:true
    })
  }

  Register = (e) => {
    const newUser = {
      email: this.state.email,
      password:this.state.password,
      permission:"user"
    };

    // Posts user information on user registration, and posts it to API using axios' options.
    // Then redirects the user to dashboard. If the user registration already exists, render error.
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      }
    };

    axios
      .post('http://localhost:2000/users/', newUser, axiosConfig)
      .then(response => {
        const userId=response.data._id;
        this.props.login(userId);
        this.props.history.push('/home');
        this.setState({
          showSidebar:false
        });
      }).catch(error => {
        if (error.response.data.code === 11000) {
          this.setState({ caughtError: true });
        }
      })

  }
  render() {
    const {
      email,
      password,
      emailLogin,
      passwordLogin,
      error,
      showLoginForm,
      showRegisterForm,
      showSidebar
    }= this.state;

      return (
        <Fragment>
          <div className="header">
          </div>
          <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"/>
          <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
            <i className="fa fa-user"></i>
          </label>
          {showSidebar ?
          <div id="sidebarMenu">
            <ul className="sidebarMenuInner">
              <li>
              <Fragment>
              {showLoginForm ? 
              <Form onSubmit={this.Login}>
                  <p className="viaOr">Login via</p>
                  <div className="social-buttons">
								    <Button className="btnS btnFb"><i className="fa fa-facebook"></i>  Facebook</Button>
								    <Button className="btnS btnTw"><i className="fa fa-twitter"></i> Twitter</Button>
							    </div>
                  <p className="viaOr or">eller</p>
                  <Form.Control className="inputForm Z" size="lg" type="Email" placeholder="E-post address" value={emailLogin}   onChange={this.handleInputChange('emailLogin')} />
                  <br />
                  <Form.Control className="inputForm" size="lg" type="password" placeholder="Lösenord" value={passwordLogin}   onChange={this.handleInputChange('passwordLogin')} />
                  <br />
                  <p className="forgot">Glömt ditt lösenord?</p>
                  {error ? <p>E-post addressen och lösenordet stämmer inte överens. Försök igen eller registrera dig.</p>:null}
                  <br /> 
                  {/*We call Login method when we click the submit button in the form .*/}
                  <Button variant="success" type="submit">Login</Button>
                  <Button className="btnRegister" variant="info" onClick={this.showRegisterForm} >Register</Button>
                </Form>
                :null}
                {showRegisterForm ?
                <Form onSubmit={this.Register}>
                    <h2 className="registerH">Registrera</h2>
                    <Form.Control className="inputForm" size="lg" type="Email" placeholder="E-post address" value={email}   onChange={this.handleInputChange('email')} />
                    <br />
                    <Form.Control className="inputForm Y" size="lg" type="password" placeholder="Lösenord" value={password}   onChange={this.handleInputChange('password')} />
                    <br />
                    {/*We call Login method when we click the submit button in the form .*/}
                    <Button className="formBtn" variant="success" type="submit">Register</Button>
                    <Button className="tillbaka" variant="danger" onClick={this.goBack}>Tillbaka</Button>
                  </Form>
                  :null}
                </Fragment>
              </li>
            </ul>
          </div>
          :null}
        </Fragment>
      );
  }
}
export default withStorage(UserComponent);