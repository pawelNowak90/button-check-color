import React from 'react';


const Select = (props) => {

    return (
        <>
        <label htmlFor={props.name}>{props.content}</label>
        <select onChange={props.change} name={props.name} id="">
            {props.pallete.map(color => <option value={color.hex}> {color.name} </option> )}

        </select>
        </>
     );

}

export default Select;