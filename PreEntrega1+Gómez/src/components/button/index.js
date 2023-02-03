import React from "react";
import './styles.css'

const Button = (props) => {
    return <button className="button-container">{props.title}</button>
}

export default Button;