import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './day-2/ThemeProvider';
import { Border } from './components/Border.styled';

function App() {
  const [theme,toggleTheme]=useContext(ThemeContext)
  return (
   
   
   <Border>
     <h1>ABCD</h1>
   </Border>
  );
}

export default App;
