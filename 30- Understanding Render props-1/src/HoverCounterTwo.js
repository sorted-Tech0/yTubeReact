import React, { Component } from "react";

class HoverCounterTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increamentCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    const { count } = this.state;
    return <h1 onMouseOver={this.increamentCount}>Hovered {count} times</h1>;
  }
}

export default HoverCounterTwo;
