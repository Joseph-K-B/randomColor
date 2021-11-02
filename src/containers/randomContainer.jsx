import React, { Component } from "react";
import { render } from "react-dom";

colors = ['red', 'green', 'blue', 'purple', 'black']

class colorContainer extends Component{

    state = {
        color: 'gold'
    }

componentDidMount() {
const random = () => {
    return Math.floor(Math.random() * colors.length)
    }
  }
  render() {
      return random 
  }
}


export default colorContainer