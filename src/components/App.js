import React, {Component} from 'react';
import './App.css';
import Button from './Button.js';


class App extends Component {

  state = {
    backgroundColor:'#999',
    color:'red',

  //   buttonColors: {
  //     backgroundColor:'orange',
  //     color:'red',
  // }
 }

//trzymanie wszystkich wlasciwosci CSS w obiekcie i jak w setState aktualizować obiekt oraz jak zrobić to na HOOKACH
//dalszy rozwój apki

  changeColor = (e) => {
    if (e.target.name==="fontColor"){
    this.setState({
      color:e.target.value,
    })} else if (e.target.name ==="bgcColor"){
      this.setState({
        backgroundColor:e.target.value,
      })
    }

  }

  colors={
    turquoise:'#1abc9c',
    emerald:'#2ecc71',
    peter_river:'#3498db'
  }

  render() {
    //destrukturyzacja metod/tablic ? -const {nazwaTablicy} = skąd?
    const {color, backgroundColor} = this.state
    return (
    <div className="App">
      <h3>Tydzień nr 3 - architektura aplikacji - 01 BUTTON</h3>
      <Button color={color} bgc={backgroundColor} label={'Kliknij i wybierz twój ulubiony zestaw kolorów'}/>
      <br />

      <label htmlFor="fontColor">Wybierz kolor czcionki </label>

      <select onChange={this.changeColor} name="fontColor" id="">
        <option value={this.colors.turquoise}>Turkusowy </option>
        <option value={this.colors.emerald}>emerald </option>
        <option value={this.colors.peter_river}>peter_river </option>
      </select>

      <label htmlFor="bgcColor">Wybierz kolor tła </label>

      <select onChange={this.changeColor} name="bgcColor" id="">
        <option value={this.colors.turquoise}>Turkusowy </option>
        <option value={this.colors.emerald}>emerald </option>
        <option value={this.colors.peter_river}>peter_river </option>
      </select>

    </div>
  )
}
}
export default App;
