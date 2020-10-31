import React from 'react';


const Select = (props) => {

    return (
        <>
        <label htmlFor={props.name}>{props.content}</label>
        <select onChange={props.change} name={props.name} id="">
            {props.pallete.map((color, index) => <option value={color.hex} key={`color-0${index}-${color.name}`}> {color.name} </option> )}
        </select>
        </>
     );

}

export default Select;