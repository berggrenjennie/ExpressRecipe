// Core functionality from React & Bootstrap
import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

// CSS imports
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css'

class NavBarComponent extends Component {

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
    }=this.state
    return (
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand>ExpressRecept</Navbar.Brand>
        <Navbar.Toggle className="navbar-togg" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <NavLink to="/" style={{textDecoration: 'none'}}>Home</NavLink>
            <NavLink to="/profile" style={{textDecoration: 'none'}}>My Profile</NavLink>
            {/*{userPermission === "admin" ?*/}
            <NavLink to="/adminpage" style={{textDecoration: 'none'}}>Admin</NavLink> 
            {/*: null}*/}
            {/*{userPermission === "superuser" ?*/}
            <NavLink to="/superuserpage" style={{textDecoration: 'none'}}>Superuser</NavLink>
            {/*: null}*/}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBarComponent;