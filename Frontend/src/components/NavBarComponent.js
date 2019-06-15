// Core functionality from React & Bootstrap
import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Item, Button, Form } from 'react-bootstrap';

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
    } = this.state
    return (
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
          <Nav>
            <NavDropdown title="Login" id="collasible-nav-dropdown">
              <p className="viaOr">Login via</p>
							<div className="social-buttons">
								<Button className="btnS btnFb"><i className="fa fa-facebook"></i>  Facebook</Button>
								<Button className="btnS btnTw"><i className="fa fa-twitter"></i> Twitter</Button>
							</div>
              <p className="viaOr or">eller</p>
							<Form className="form" role="form" method="post" action="login" accept-charset="UTF-8" id="login-nav">
								<div className="form-group">
									<label className="sr-only" for="exampleInputEmail2">E-post address</label>
									<input type="email" className="form-control" id="exampleInputEmail2" placeholder="E-post address" required/>
								</div>
								<div className="form-group">
									<label className="sr-only" for="exampleInputPassword2">Lösenord</label>
									<input type="password" className="form-control" id="exampleInputPassword2" placeholder="Lösenord" required/>
                  <p className="forgot">Glömt ditt lösenord?</p>
								</div>
                <div className="form-group">
									<Button type="submit" variant="success">Login</Button>
								</div>
							</Form>
			        <p className="join">Inget konto? Registrera dig här!</p>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBarComponent;