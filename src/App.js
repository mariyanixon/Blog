import { Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Blg from './Blg';
import Tble from './Tble';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <br></br>
        <br></br>
      <Routes>
        <Route path='/' element={<Tble/>}></Route>
        <Route path='/Blg' element={<Blg/>}></Route>
      
        
      </Routes>
     
      
     
          </div>
  );
}

export default App;
