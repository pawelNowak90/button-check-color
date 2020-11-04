import React from 'react';

const Textarea = (props) => {
  const styles = {
    color:props.color,
    backgroundColor:props.bgColor,
  }
    return (
        <React.Fragment>
            <label htmlFor="textarea">
                Tutaj możesz napisać coś więcej
                <textarea style={styles} name="textarea" rows="5"/>
            </label>
        </React.Fragment>
     );
}

export default Textarea;