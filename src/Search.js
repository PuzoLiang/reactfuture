import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '我威武',
      check: undefined
    }
  }

  search = (e) => {
    const target = e.target;
    switch (target.name) {
      case 'search':
        this.setState({
          search: e.target.value
        });
        break;
      case 'check': 
        this.setState({
          check: target.checked
        })
    }
  }

  componentDidMount() {
    
  }
  render() {
    console.log(`${this.state.search}`);
    return (
      <React.Fragment>
        <h1>{new Date().toLocaleString()}</h1>
        <form style={{ padding: '5px', border: '1px solid green' }}>
          <input type='text' name="search" placeholder="Searching..." value={this.state.search} onChange={this.search} /><br />
          <input type="checkbox" name="check" value={this.state.check} onChange={this.search} /><span>Only show prodcutions on stok</span>
        </form>
      </React.Fragment>
    )
  }
}