import React, { Component } from 'react';

class TestMessage extends Component {
  render() {

    var name = "Diego";
    var message = "test Mode";
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    )
  }
}
