/*LoginScreen IS A class Component which has a state :
a value that respects the value of the input field in the form.
And two methods:
1-handleChange: To control and change the value of the input field in the form by using setState.
2-Login: To set the value of the input field in localStorage, and navigates to the dashboard using History.
*/

import React, { Component } from 'react';
import {Button,Form} from 'react-bootstrap';
import CardComponent from '../components/CardComponent';
import withStorage from './../HOCS/withStorage';
import axios from 'axios';
import PropTypes from "prop-types";

class LoginComponent extends Component {
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
Login = event => {
  event.preventDefault();
  this.setState({
    showLoginForm:true,
    showRegisterForm:false
  })
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
  this.props.login(user.permission);
  this.props.history.push('/dashboard');
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
        this.props.addUser(response.data._id);
        this.props.history.push('/dashboard');
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
    }= this.state;

      return (
        <CardComponent>
        {showLoginForm?
        <Form onSubmit={this.Login}>
            <h1>Login</h1>
            <Form.Control className="inputForm" size="lg" type="Email" placeholder="Email" value={emailLogin}   onChange={this.handleInputChange('emailLogin')} />
            <br />
            <Form.Control className="inputForm" size="lg" type="password" placeholder="Password" value={passwordLogin}   onChange={this.handleInputChange('passwordLogin')} />
            <br />
            {error ? <p>Email and password don't match Please try agin or register.</p>:null}
            <br />
            {/*We call Login method when we click the submit button in the form .*/}
            <Button className="loginBtn" variant="success" type="submit">Login</Button><Button className="loginBtn" variant="primary" onClick={this.showRegisterForm} >Register</Button>
          </Form>

          :null}
          {showRegisterForm?
          <Form onSubmit={this.Register}>
              <h1>Register</h1>
              <Form.Control className="inputForm" size="lg" type="Email" placeholder="Email" value={email}   onChange={this.handleInputChange('email')} />
              <br />
              <Form.Control className="inputForm" size="lg" type="password" placeholder="Password" value={password}   onChange={this.handleInputChange('password')} />
              <br />
              {/*We call Login method when we click the submit button in the form .*/}
              <Button className="loginBtn" variant="success" type="submit">Register</Button>
            </Form>

            :null}
      </CardComponent>
      );
  }
}


export default withStorage(LoginComponent);
