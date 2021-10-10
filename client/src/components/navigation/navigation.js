import axios from "axios";
import React, { Component } from "react";

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      Name: "Undefined",
    };
  }
  handleClick = () => {
    axios.get("/users/new").then((res) => {
      this.setState({
        Name: res.data.name,
      });
      console.log(res.data)
    });
  };
  render() {
    return (
      <div>
        <h1>This Application is being written by {this.state.Name}</h1>
        <button onClick={this.handleClick}>Click to turn it see name</button>
      </div>
    );
  }
}

export default Navigation;
