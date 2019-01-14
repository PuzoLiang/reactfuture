import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    }
  }
  tick() {
    this.timerID = setInterval(() => {
      this.setState((state,props) =>({
        time: new Date().toLocaleString()
      }));
    },1000);
  }
  render() {
    return (
      <React.Fragment>
      <h1>{this.state.time}</h1>
      <div className="App">
        <Button variant="contained" onClick={() => {this.tick()}} color="primary">
          Hello World
        </Button>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
