import React, { Component } from 'react';
import FilterableProducTable from './Container';
import SearchK from './SearchK';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
        { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
        { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
        { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
        { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
        { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
      ],
      filter: true
    }
  }

  click = (e) => {
    this.setState({
      filter: e.target.checked
    })
  }

  render() {
    return (
      <React.Fragment>
        <form style={{marginBottom: "50px"}}>
          <input type="checkbox" value={this.state.filter} onChange={this.click} /> <span>勾选渲染React表单过滤，否则渲染查找电影组件</span>
        </form>
        <div>
          {this.state.filter ? <FilterableProducTable data={this.state.data} /> : <SearchK />}
        </div>
      </React.Fragment>
    )
  }
}

export default App;
