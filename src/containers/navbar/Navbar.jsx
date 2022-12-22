import React from 'react'
import './Navbar.css';
import { MdDarkMode, MdOutlineLightMode} from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { changeLight } from '../../reduxStore/lighting-slice'


const Navbar = () => {

  const light = useSelector(state => state.light.mode);
  const Light = useDispatch();

  const handleLight = () =>{
    Light(changeLight());
  } 

  return (
    <div className={light ? ' navbar dark' : 'navbar light'}>
      <h1>Vet List</h1>
      
      <button onClick={handleLight} className='navbar__lighting'>
        {light ? <><MdDarkMode/> dark mode</> : <><MdOutlineLightMode/> light mode</>}
      </button>
    </div>
  )
}

export default Navbar