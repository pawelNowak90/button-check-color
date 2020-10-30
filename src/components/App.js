import React, {Component} from 'react';
import './App.css';
import Button from './Button.js';
import Select from './Select.js';


class App extends Component {

  state = {
    styles:
    {backgroundColor:'#f6b93b',
    color:'#4a69bd'},
 }

 colorsFr2=[
  {name:'squash_bloosom',hex:'#f6b93b'},
  {name:'mandarin_red',
   hex:'#e55039'},
  {name:'azraq_blue',
   hex:'#4a69bd'},
  {name:'dupain',
   hex:'#60a3bc'},
  {name:'aurora_green',
   hex:'#78e08f'}
];
 colorsFr3=[
  {name:'iceland_poppy',hex:'#fa983a'},
  {name:'tomato_red',   hex:'#eb2f06'},
  {name:'yue_guang_lan_blue',   hex:'#1e3799'},
  {name:'good_samaritan', hex:'#3c6382'},
  {name:'waterfall',      hex:'#38ada9'}
];

//aktualizować obiekt ? oraz jak zrobić to na HOOKACH
//dalszy rozwój apki

  changeColor = (e) => {
    let styles={...this.state.styles}
    // let item={...styles.backgroundColor}
    // item.backgroundColor=e.target.value;
      styles.[e.target.name]=e.target.value;
      this.setState({styles})

  }

  render() {
    //destrukturyzacja metod/tablic ? -const {nazwaTablicy} = skąd?
    const {color, backgroundColor, styles} = this.state
    return (
    <div className="App">
      <h3>Tydzień nr 3 - architektura aplikacji - 01 BUTTON</h3>
      <Button styles={styles} color={color} bgc={backgroundColor} label={'Kliknij i wybierz twój ulubiony kolor z palety FRANCE'}/>
      <br />{/*  //I must zastąpić to */}

      <Select change={this.changeColor} name={'color'} content={'Wybierz kolor czcionki '} pallete={this.colorsFr3}/>
      <Select change={this.changeColor} name={'backgroundColor'} content={'Wybierz kolor tla '} pallete={this.colorsFr2}/>

    </div>
  )
}
}
export default App;
