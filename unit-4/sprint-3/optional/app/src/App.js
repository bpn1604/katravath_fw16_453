
import './App.css';
import { AuthContext } from './contexts/AuthProvider';
import Home from './pages/Home';
import Login from './pages/Login';
import { useContext } from 'react';

function App() {
  const {isLoggedIn}=useContext(AuthContext)
  return (
    <div className="App">
    {isLoggedIn ?<Home />:  <Login />}
       
      
     
        
    </div>
  );
}

export default App;
