import React from 'react';
import './HideDiv.css'

// const styles = {fontSize:'40px'};

class HideDiv extends React.Component {

    state = {
        styles:
        {display:'none'},
     }

    showDivHandler = () => {
    // let square = document.querySelector('div#square');
    // square.style.display="block";

    this.setState({
        styles:{display:'block'}
    })
}

    render() {
        return (
            <>
            <button onClick={this.showDivHandler}>Pokaz diva</button>
            <div id="square" style={this.state.styles} className="image">to jest komponent HideDiv</div>
        </>

         );
    }
}

export default HideDiv;
