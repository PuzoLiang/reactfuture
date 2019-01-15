import React from 'react';

export default class Info extends React.Component {

  input = (e) => {
    this.props.handleInput.call(null,e.target.value);
  }

  update = (e) => {
    this.props.update.call(null,this.props.indetfier,e);
  }
  render() {
    const { indetfier } = this.props;
   return (
     <React.Fragment>
      <h1>{indetfier}</h1>
      <form>
        <input value={this.props.info} onChange={this.input}></input>
        <button onClick={this.update}>Update</button>
      </form>
    </React.Fragment>
   )
  }
}