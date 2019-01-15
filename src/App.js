import React, { Component } from 'react';
import Button from './Button';
class App extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    const posts = [
      {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
      {id: 2, title: 'Installation', content: 'You can install React from npm.'}
    ];
    return (
      <React.Fragment>
        <Button posts={posts} />
      </React.Fragment>
    );
  }
}

export default App;
