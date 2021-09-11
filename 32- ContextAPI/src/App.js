import React, { Component } from "react";
import "./App.css";
import ComponentC from "./ComponentC";
import { UserProvider } from "./userContext";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProvider value="shiva">
          <ComponentC />
        </UserProvider>
      </div>
    );
  }
}

export default App;
