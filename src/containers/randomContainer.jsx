import React, { Component, useEffect } from "react";
import { render } from "react-dom";
import presentColors from "../components/app/randomColor";

colors = ['red', 'green', 'blue', 'purple', 'black']

class colorContainer extends Component{

    state = {
        color: 'gold'
    }

componentDidMount() {
    useEffect(() => {
        const interval = setInterval(() => { const random = () => {
            return Math.floor(Math.random() * colors.length)
            }
            this.setState({ color: random });
        }, 1000);
        return () => clearInterval(interval);
    }, []);
   
  }

  render() {
      return <presentColors backgroundColor = {this.state.color} />
  }
}


export default colorContainer