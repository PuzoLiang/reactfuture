import React from 'react';
import SearchBar from './Search';
import ProductTable from './Display';
export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      check: undefined
    }
  }
  handleForm = (e) => {
    const target = e.target;
    switch (target.name) {
      case 'search':
        this.setState({
          search: target.value
        });
        break;
      case 'check': 
        this.setState({
          check: target.checked
        });
        break;
      default: 
        return null;
  }
}

  render() {
    const style = {
      width: "200px",
      border: '1px solid red',
      margin: '0 auto'
    }
    return (
      <div style={style}>
        {this.state.search}
        <SearchBar search={this.state.search} check={this.state.check} handleForm={this.handleForm}/>
        <ProductTable data={this.props.data} search={this.state.search} check={this.state.check}/>
      </div>
    )
  }
}