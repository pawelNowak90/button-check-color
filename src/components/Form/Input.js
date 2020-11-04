import React from 'react';



const Input = (props) => {
  const styles = {
    color:props.color,
    backgroundColor:props.bgColor,
  }
  return (
        <React.Fragment>
          <label htmlFor="input">
            Wpisz cokolwiek:
            <input style={styles} type="input" name="input"/>
          </label>
        </React.Fragment>
    );
}

export default Input;