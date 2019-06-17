// Core functionality from React & Bootstrap
import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Button} from 'react-bootstrap';
import axios from 'axios';


// CSS imports
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css'
import withStorage from './../HOCS/withStorage';

class NavBarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
     showWelcomeUser:false,
     userData:[],
     showlogout:false,
    }
  }

  componentDidMount() {
    if(localStorage.getItem('user')){
      const userId=localStorage.getItem('user');
      axios.get('http://localhost:2000/users/'+userId)
          .then(response => this.setState({
            userData: response.data,
            showWelcomeUser: true,
          }));
    }
  }

  Logout = (e) => {
    if (localStorage.getItem('user')) {
       localStorage.removeItem('user');
       this.setState({
         showWelcomeUser: false,
         showlogout:true,
         userData:[]
       })
       // this.props.history.push('/home');
    }
  }
  render() {
    const {
      showWelcomeUser,
      userData,
      showlogout
    } = this.state
    return (
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand>ExpressRecept</Navbar.Brand>
        <Navbar.Toggle className="navbar-togg" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
          <Nav>
            <NavLink to="/" style={{textDecoration: 'none'}}>Hem</NavLink>
            {showWelcomeUser?
            <NavLink to="/favourite" style={{textDecoration: 'none'}}>Min Favorit</NavLink>
            :null}
            <NavLink to="/about" style={{textDecoration: 'none'}}>Om Oss</NavLink>
            {userData.permission === "admin" ?
            <NavLink to="/adminpage" style={{textDecoration: 'none'}}>Admin</NavLink>
            : null}}
            {userData.permission === "superuser" ?
            <NavLink to="/superuserpage" style={{textDecoration: 'none'}}>Superuser</NavLink>
            : null}
          </Nav>
          <Nav>
          {showWelcomeUser?
            <NavLink style={{textDecoration: 'none'}}>{userData.email}</NavLink>
          :null}
          {showWelcomeUser?
            <Button className="formBtn" variant="primary" onClick={this.Logout} >Logout</Button>
          :null}
          {showlogout?
            <NavLink to="/home" style={{textDecoration: 'none'}}>Hejdå!</NavLink>
          :null}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default withStorage(NavBarComponent);