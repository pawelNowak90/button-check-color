import React from 'react';

const Textarea = (props) => {
  const styles = {
    color:props.color,
    backgroundColor:props.bgColor,
  }
    return (
        <>
            <label htmlFor="textarea">
                Tutaj możesz napisać coś więcej
                <textarea style={styles} name="textarea" rows="5"/>
            </label>
        </>
     );
}

export default Textarea;