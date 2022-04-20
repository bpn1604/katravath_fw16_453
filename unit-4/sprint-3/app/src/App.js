
import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './day-2/ThemeProvider';
import { Border } from './components/Border.styled';
import CardForm from './day-1/CardForm';

function App() {
  const [theme,toggleTheme]=useContext(ThemeContext)
  return (
  //  <>
  //   <div >
  //   {theme}:<button onClick={toggleTheme}>Toggle Theme</button>
  // </div>
  //  <Border color={theme} className="App">

  //    <h1>ABCD</h1>
     
     
  //  </Border>
  //  </>

  <CardForm />
  );
}

export default App;
