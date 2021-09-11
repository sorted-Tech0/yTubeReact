import React, { Component } from "react";
import "./App.css";
import FocusInput from "./FocusInput";
import RefsDemo from "./RefsDemo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FocusInput />
        {/* <RefsDemo /> */}
      </div>
    );
  }
}

export default App;
