import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Search from './components/Search';
import Delete from './components/Delete';
import Viewall from './components/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Login/>}/>
        <Route path='/Search' element={<Search/>}/>
        <Route path='/Delete' element={<Delete/>}/>
        <Route path='/viewall' element={<Viewall/>}/>

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
