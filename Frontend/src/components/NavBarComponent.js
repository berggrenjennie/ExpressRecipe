/* NavBarComponent is a class component which renders three links.*/
import React, {Component} from 'react';
import { Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';


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
    console.log(localStorage.getItem('user'))
    const {
          userPermission
        }=this.state

    return (
      <Nav className="sidebar">
        <Link to="/">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/user">User</Link>
        {userPermission === "admin" ?
          <Link to="/adminpage">AdminPage</Link>
        :null}
        {userPermission === "superuser" ?
          <Link to="/superuserpage">Super User</Link>
        :null}
          </Nav>
        );
    }

}
export default NavBarComponent;
