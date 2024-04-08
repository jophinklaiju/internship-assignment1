import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Blogform from './components/Blogform';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     <Navbar/>
     
     <Routes>
     <Route path='/home' element={<Home/>}/>
     <Route path='/add' element={<Blogform/>} />
   </Routes>
    </div>
  );
}

export default App;
