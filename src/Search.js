import React from 'react';

export default class Search extends React.Component {

  search = (e) => {
    this.props.handleForm.call(null, e);
  }

render() {
  return (
    <React.Fragment>
      <form style={{ padding: '5px', border: '1px solid green' }}>
        <input type='text' name="search" placeholder="Searching..." value={this.props.search} onChange={this.search} /><br />
        <input type="checkbox" name="check" value={this.props.check} onChange={this.search} /><span>Only show prodcutions on stok</span>
      </form>
    </React.Fragment>
  )
}
}