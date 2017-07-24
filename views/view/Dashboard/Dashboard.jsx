import '../../Imports';
import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello Word!</h1>
        <p>{this.props.message}</p>
        <hr />
        <ButtonToolbar>
          <Button bsStyle="primary" onClick={() => this.props.alerts()}>Alert</Button>
          <a href="/about" className="btn btn-default">About</a>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Dashboard;
