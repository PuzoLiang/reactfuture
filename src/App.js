import React, { Component } from 'react';
import Container from './Container';
import Search from './Search';
import Display from './Display';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
      ]
    }
  }  
  
 render() {
   return (
     <Container top={<Search />} bottom={<Display data={this.state.data} />}/>
   )
 }
}

export default App;
