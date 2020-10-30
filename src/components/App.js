import React, {Component} from 'react';
import './App.css';
import Button from './Button.js';


class App extends Component {

  state = {
    styles:
    {backgroundColor:'#999',
    color:'blue'},
 }

//aktualizować obiekt ? oraz jak zrobić to na HOOKACH
//dalszy rozwój apki

  changeColor = (e) => {
    let styles={...this.state.styles}
    // let item={...styles.backgroundColor}
    // item.backgroundColor=e.target.value;
      styles.[e.target.name]=e.target.value;
      this.setState({styles})

  }

  colors={
    turquoise:'#1abc9c',
    emerald:'#2ecc71',
    peter_river:'#3498db'
  }

  render() {
    //destrukturyzacja metod/tablic ? -const {nazwaTablicy} = skąd?
    const {color, backgroundColor, styles} = this.state
    return (
    <div className="App">
      <h3>Tydzień nr 3 - architektura aplikacji - 01 BUTTON</h3>
      <Button styles={styles} color={color} bgc={backgroundColor} label={'Kliknij i wybierz twój ulubiony zestaw kolorów'}/>
      <br />

      <label htmlFor="color">Wybierz kolor czcionki </label>

      <select onChange={this.changeColor} name="color" id="">
        <option value={this.colors.turquoise}>Turkusowy </option>
        <option value={this.colors.emerald}>emerald </option>
        <option value={this.colors.peter_river}>peter_river </option>
      </select>

      <label htmlFor="backgroundColor">Wybierz kolor tła </label>

      <select onChange={this.changeColor} name="backgroundColor" id="">
        <option value={this.colors.turquoise}>Turkusowy </option>
        <option value={this.colors.emerald}>emerald </option>
        <option value={this.colors.peter_river}>peter_river </option>
      </select>

    </div>
  )
}
}
export default App;
