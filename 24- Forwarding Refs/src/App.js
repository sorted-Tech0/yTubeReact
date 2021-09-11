import React, { Component } from "react";
import "./App.css";
import FocusInput from "./FocusInput";
import FRParentInput from "./FRParentInput";
import RefsDemo from "./RefsDemo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FRParentInput />
        {/* <FocusInput /> */}
        {/* <RefsDemo /> */}
      </div>
    );
  }
}

export default App;
