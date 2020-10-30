import React from 'react';
import './Button.css';

const Button = (props) => {

    return (
    <button className="colorButton" style={props.styles}>  {props.label}</button>
    )
}

export default Button;