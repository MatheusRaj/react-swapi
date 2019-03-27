import React, { Component } from "react";

interface IProps {
  title: string;
  episode: string;
  description: string;
}

class Content extends Component<IProps> {
  render() {
    return (
      <div className="content">
        <h2>
          Episode: {this.props.episode} - {this.props.title}
        </h2>
        <p>Description: {this.props.description}</p>
      </div>
    );
  }
}

export default Content;
