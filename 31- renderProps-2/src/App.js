import React, { Component } from "react";
import "./App.css";
import ClickCounterTwo from "./ClickCounterTwo";
import Counter from "./Counter";
import HoverCounterTwo from "./HoverCounterTwo";
import User from "./User";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter>
          {(count, increamentCount) => (
            <ClickCounterTwo count={count} increamentCount={increamentCount} />
          )}
        </Counter>

        <Counter>
          {(count, increamentCount) => (
            <HoverCounterTwo count={count} increamentCount={increamentCount} />
          )}
        </Counter>

        {/*  
        <Counter
          render={(count, increamentCount) => (
            <ClickCounterTwo count={count} increamentCount={increamentCount} />
          )}
        />

        <Counter
          render={(count, increamentCount) => (
            <HoverCounterTwo count={count} increamentCount={increamentCount} />
          )}
        />

        */}
        {/* <ClickCounterTwo />
        <HoverCounterTwo />
        <User render={(isLOggedIn) => (isLOggedIn ? "shivanesh" : "Guest")} /> */}
      </div>
    );
  }
}

export default App;
