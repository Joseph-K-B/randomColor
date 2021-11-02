import React from "react";

colors = ['red', 'green', 'blue', 'purple']

const random = () => {
    return Math.floor(Math.random() * colors.length)
}

export default random