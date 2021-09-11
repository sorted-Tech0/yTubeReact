import React, { Component } from "react";
import "./App.css";
import ClickCounterTwo from "./ClickCounterTwo";
import HoverCounterTwo from "./HoverCounterTwo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounterTwo />
        <HoverCounterTwo />
      </div>
    );
  }
}

export default App;
