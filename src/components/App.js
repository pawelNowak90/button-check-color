import React, { useState } from 'react';

import './App.css';
import Button from './Form/Button.js';
import Select from './Form/Select.js';
import HideDiv from './HideDiv';
import { faUser } from "@fortawesome/free-solid-svg-icons";


const colorsFr3=[
  {name:'iceland_poppy',hex:'#fa983a'},
  {name:'tomato_red',   hex:'#eb2f06'},
  {name:'yue_guang_lan_blue',   hex:'#1e3799'},
  {name:'good_samaritan', hex:'#3c6382'},
  {name:'waterfall',      hex:'#38ada9'}
];

const colorsFr2=[
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

const App = () => {
  const [color, setColor]=useState('black');
  const [bgColor, setBgColor]=useState('gray');
  return (

    <div className="wrapper">

      <h3>Szkoła reacta - Tydzień nr 3 - rozwiązanie zadania 2 i 3:</h3>
      <Button color={color} bgColor={bgColor} icon={faUser} label={'Wybierz twój ulubiony zestaw kolorów'}/>
      <Select change={(e)=>{setColor(e.target.value)}} name={'color'} content={'Kolor czcionki '} pallete={colorsFr3}/>
      <Select change={(e)=>{setBgColor(e.target.value)}} name={'backgroundColor'} content={'Kolor tla '} pallete={colorsFr2}/>

      <h3>Szkoła reacta - Tydzień nr 3 - rozwiązanie zadania 1:</h3>
      <HideDiv color={color} bgColor={bgColor}/>

      </div>

    );
}

export default App;