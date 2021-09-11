import React, { Component } from "react";

class HoverCounterTwo extends Component {
  render() {
    const { count, increamentCount } = this.props;
    return <h1 onMouseOver={increamentCount}>Hovered {count} times</h1>;
  }
}

export default HoverCounterTwo;
