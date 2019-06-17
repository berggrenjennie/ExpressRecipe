// Core functionality from React & Bootstrap
import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button, Form } from 'react-bootstrap';

import UserComponent from '../components/UserComponent';

// CSS imports
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css'

class NavBarComponent extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     userPermission:"user"
  //   }
  // }
  //
  // componentDidMount() {
  //   this.setState({
  //     userPermission: localStorage.getItem('user')
  //   });
  // }

  render() {
    // const {
    //   userPermission
    // } = this.state
    return (
      <div>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand>ExpressRecept</Navbar.Brand>
        <Navbar.Toggle className="navbar-togg" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
          <Nav>
            <NavLink to="/" style={{textDecoration: 'none'}}>Hem</NavLink>
            <NavLink to="/profile" style={{textDecoration: 'none'}}>Min Profil</NavLink>
            <NavLink to="/about" style={{textDecoration: 'none'}}>Om Oss</NavLink>
            {/*{userPermission === "admin" ?*/}
            <NavLink to="/adminpage" style={{textDecoration: 'none'}}>Admin</NavLink>
            {/*: null}*/}
            {/*{userPermission === "superuser" ?*/}
            <NavLink to="/superuserpage" style={{textDecoration: 'none'}}>Superuser</NavLink>
            {/*: null}*/}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}
export default NavBarComponent;
