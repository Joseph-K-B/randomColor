import React, { Component, useEffect } from "react";
import PresentColors from "../components/app/randomColor";

const colors = ['red', 'green', 'blue', 'purple', 'black']

class ColorContainer extends Component{

    state = {
        color: 'gold'
    }

componentDidMount() {
    // useEffect(() => {
        const interval = setInterval(() => { const random = () => {
            return Math.floor(Math.random() * colors.length)
            }
            this.setState({ color: random });
        }, 1000);
        return () => clearInterval(interval);
    // }, []);
   
  }

  render() {
      return <PresentColors backgroundColor = {this.state.color} />
  }
}


export default ColorContainer