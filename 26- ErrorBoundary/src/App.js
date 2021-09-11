import React, { Component } from "react";
import "./App.css";
import Hero from "./components/Hero";
import ErrorBoundary from "./ErrorBoundary";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <Hero heroName="superman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="joker" />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
