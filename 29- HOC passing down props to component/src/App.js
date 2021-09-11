import React, { Component } from "react";
import "./App.css";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounter name="shiva" />
        <HoverCounter />
      </div>
    );
  }
}

export default App;
