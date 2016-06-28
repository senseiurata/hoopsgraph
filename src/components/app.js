import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="rc-app">
        <h1>
          <img className="logo" src="/bballfire.png" />
          HoopsGraph
        </h1>
        <h3>Compare NBA Careers!</h3>
        { this.props.children }
      </div>
    );
  }
}
