/*
CardComponent is a class component which we use to show or hide the card.
It has one state (showInfo) in the constructor, and one method (toggleInfo)
which we use to change the state(showInfo) from true to false when we click the button
 (Show info) and this will in its turn to show or hide the info.
*/

// Core functionality from React & Bootstrap
import React, { Component } from 'react';
import { Button, Card} from 'react-bootstrap';
import PropTypes from 'prop-types';

class CardComponent extends Component {
  
  static propTypes = {
    info: PropTypes.string,   // throws a warning if info is not string
  }

  constructor(props){
    super(props);
    this.state = {
      showInfo: false,
    }
  }
  
  //change the showInfo state depending on the boolean value.
  toggleInfo = (e) => {
    this.setState({ showInfo: !this.state.showInfo })
  }

  render(){
    return (
      <Card className="card">
        <div>
          {this.props.children}
        </div>
        <div id="showHide">
          {this.state.showInfo?this.props.info:null}
        </div>
        {this.props.info &&
          <Button className="cardBtn" variant="primary" onClick={this.toggleInfo}>Show info</Button>
        }
      </Card>
    );
  }
}
export default CardComponent;