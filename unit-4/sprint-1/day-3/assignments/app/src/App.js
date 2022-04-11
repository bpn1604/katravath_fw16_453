import logo from './logo.svg';
import React from 'react';
import './Styles/Styles.css'
import './App.css';

import './Card.module.css'
import { CardData } from './Card_componets/CardData';
import { Component } from 'react';


import { useState} from 'react';
import ShowCard from './Card_componets/Card/ShowCard';
import TodoList from './Day_3/TodoList'

class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state={
      data:CardData
    }
   
  }
render(){
return (
  <>
  <ShowCard data={this.state.data}/>
  <TodoList/>
  </>
)

}
}


 export default App;
