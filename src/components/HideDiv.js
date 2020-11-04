import React from 'react';
import './HideDiv.css'
import {Input, Textarea, Button} from './Form';

class HideDiv extends React.Component {

    state = {
        styles:
        {display:'none'},
    color:'black',
    bgColor:'gray',
    }

    showDivHandler = () => {
    this.setState({
        styles:{display:'block'}
    })
}

    render() {

        return (
            <React.Fragment>
                <button className="hideButton" onClick={this.showDivHandler}>Kliknij aby pokazać rozwiązanie: <strong>Input</strong> oraz <strong>Textarea</strong> </button>
                <div id="square" style={this.state.styles} className="task-3">
                    <Input color={this.props.color} bgColor={this.props.bgColor}/>
                    <Textarea color={this.props.color} bgColor={this.props.bgColor}/>
                </div>
            </React.Fragment>

         );
    }
}

export default HideDiv;
