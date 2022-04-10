import logo from './logo.svg';
import './App.css';
import './Styles/Styles.css'
import Sample from './Day_1/Sample'
import JoinUs from './Day_1/JoinUs'
import { Component } from 'react';
import Setting from './Day_1/Setting';
import Login from './Day_1/Login';
import ContactUs from './Day_1/ContactUs';
import Search from './Day_1/Search';
import Help from './Day_1/Help';
import Home from './Day_1/Home';
import Download from './Day_1/Download';
// import Counter from './Day2/Counter';
// import TodoItem from './Day_3/TodoItem';
// import TodoList from './Day_3/TodoList';
// import Counter2 from './Day2/Counter2';

class App extends Component {
  render ()
  {
  return (
    <div id='main'> 
    <Sample/>

    
    <div id="tags">
       <JoinUs/>
    <Setting/>
    <Login/>
    <ContactUs/>
    <Search/>
    <Help/>
    <Home/>
    <Download/>
    </div>
   

   {/* <Counter2 /> */}
   
   {/* <TodoList/> */}
  
    </div>
  );
  

  }
  
}

  


export default App;
