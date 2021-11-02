import React, { Component } from "react";

class randomContainer extends Component {
    state = {
        currentColor: 'green'
    }

    render() {
        return (
            <>
            <h1>Random Colors</h1>
            <div style = {{
                backgroundColor: this.state.currentColor,
                height: 150,
                width: 150,
                margin: 20
            }}></div>
            </>
        )
    }
}

export default randomContainer