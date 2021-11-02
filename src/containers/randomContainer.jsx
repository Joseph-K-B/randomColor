import React, { Component } from "react";

class randomColor extends component {
    state = {
        currentColor: 'green'
    }

    render() {
        return (
            <>
            <h1>Random Colors</h1>
            <div style = {{
                backgroundColor: currentColor,
                height: 150,
                width: 150,
                margin: 20
            }}></div>
            </>
        )
    }
}

export default randomColor