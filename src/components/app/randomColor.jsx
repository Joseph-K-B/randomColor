import React from "react";

const PresentColors = ({backgroundColor}) => {
        return (
            <>
            <h1>Random Colors</h1>
            <div className = 'Color' style = {{
                backgroundColor,
                height: 150,
                width: 150,
                margin: 20
            }}></div>
            </>
        )
    }


export default PresentColors