import "./App.css";
import React, { Component } from "react";
import IndexPage from "./pages/indexPage";


class App extends React.Component {
  state = {
    data: null,
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <IndexPage/>
        </header>
      </div>
    );
  }
}

export default App;
