import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return <div>Hello World!</div>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
