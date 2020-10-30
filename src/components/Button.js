import React from 'react';
import './Button.css';

const Button = (props) => {

    const styles={
        backgroundColor:props.bgc,

        color:props.color,
        }

    return (
    <button className="colorButton" style={styles}>  {props.label}</button>
    )
}

export default Button;