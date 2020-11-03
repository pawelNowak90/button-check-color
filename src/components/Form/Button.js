import React from 'react';
import './Button.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Button = (props) => {

    const styles = {
        color:props.color,
        backgroundColor:props.bgColor,
    }

    return (
    <>
        <button className="colorButton"
            style={styles}
            >
                <FontAwesomeIcon icon={props.icon}/>
                {props.label}
        </button>
    </>
    )
}

export default Button;