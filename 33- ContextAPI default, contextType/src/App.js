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

        {/* if we need a default context then we don't need to include Provider */}
        {/* <ComponentC /> */}
      </div>
    );
  }
}

export default App;
