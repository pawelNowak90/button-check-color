import React from 'react';



const Input = (props) => {
  const styles = {
    color:props.color,
    backgroundColor:props.bgColor,
  }
  return (
        <>
          <label htmlFor="input">
            Wpisz cokolwiek:
            <input style={styles} type="input" name="input"/>
          </label>
        </>
    );
}

export default Input;