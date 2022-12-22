import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from './containers/navbar/Navbar'
import Home from './containers/home/Home';
import Add from './containers/add/Add'
import Update from './containers/update/Update'

function App() {
  return (

    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/edit' element={<Update/>}/>
      </Routes>
    </>
    
  );
}

export default App;
