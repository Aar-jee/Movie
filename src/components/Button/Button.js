import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div className="putton" onClick={this.props.click}>my name is{this.props.name}and my age is{this.props.value}
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} />
      </div>
    );
  }
}

export default Button;
