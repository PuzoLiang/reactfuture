import React from 'react';

export default class Button extends React.Component {

  render() {
    const posts = this.props.posts.map((post) => (<div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>));
    return (
      <div>{posts}</div>
    )
  }
}