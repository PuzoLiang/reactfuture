import React from 'react';

export default class Container extends React.Component {

  render() {
    const style = {
      width: "200px",
      height: '500px',
      border: '1px solid red',
      margin: '0 auto'
    }
    return (
      <div style={style}>
        {this.props.top}
        {this.props.bottom}
      </div>
    )
  }
}