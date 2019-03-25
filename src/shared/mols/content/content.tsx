import React, { Component } from "react";

interface IProps {
  title: string;
  episode: string;
  description: string;
}

class Content extends Component<IProps> {
  render() {
    return (
      <>
        <h2>Title: {this.props.title}</h2>
        <h2>Episode: {this.props.episode}</h2>
        <h2>Description: {this.props.description}</h2>
      </>
    );
  }
}

export default Content;
