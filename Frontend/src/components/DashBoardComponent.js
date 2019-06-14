// Core functionality from React
import React, { Component } from 'react';

// Existing component imports
import withHTTPRequests from './../HOCS/withHTTPRequests';

class DashBoardComponent extends Component {

  constructor(props) {
    super(props);  
  }

  render(){
    return (
      <div>DashBoardComponent</div>
    );
  }
}

export default withHTTPRequests(DashBoardComponent);
