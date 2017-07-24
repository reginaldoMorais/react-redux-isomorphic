import '../../Imports';
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class About extends Component {
  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    this.props.alerts();
    alert(this.props.message);
  }

  render() {
    return (
      <div>
        <h1>About!</h1>
        <hr />
        <a href="/">Retornar</a>
      </div>
    );
  }
}

export default About;
