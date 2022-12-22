import React, { useState } from 'react'
import './Add.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'
import PatientDataService from '../patients'

const Add = () => {

  const light = useSelector(state => state.light.mode);

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [breed, setBreed] = useState('');
  const [rfv, setRfv] = useState('');
  const [status, setStatus] = useState('');
  const [owner, setOwner] = useState('');  
  

  const handleInputs = (e) => {
    e.preventDefault();

    switch(e.target.name){
      case 'Name':
        setName(e.target.value);
        break;

      case 'Date':
        setDate(e.target.value);
        break;

      case 'Breed':
        setBreed(e.target.value);
        break;

      case 'RFV':
        setRfv(e.target.value);
        break;
    
      case 'Status':
        setStatus(e.target.value);
        break;
      
      case 'Owner':
        setOwner(e.target.value);
        break;
  
      default:
        break;
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    let bool = true;

    if(name === ''){
      alert("Please enter a valid name!");
      bool = false;
    }

    if(date === ''){
      alert("Please enter a valid date!");
      bool = false;
    }

    if(breed === ''){
      alert("Please enter a valid breed!");
      bool = false;
    }

    if(rfv === ''){
      alert("Please enter a valid rfv!");
      bool = false;
    }

    if(status === ''){
      alert("Please enter a valid status!");
      bool = false;
    }

    if(owner === ''){
      alert("Please enter a valid owner!");
      bool = false;
    }

    if(bool === true){
      let data = {
      "patientName": name,
      "dateOfBirth": date,
      "Owner": owner,
      "breed": breed,
      "reasonForVisit": rfv,
      "status": status
      }

      PatientDataService.createPatient(JSON.stringify(data))
      .then(response =>{
        console.log(response.data);
        alert("Patient has been added!");
      })
      .catch(e =>{
        console.log(e);
      })

      setName('');
      setBreed('');
      setDate('');
      setOwner('');
      setRfv('');
      setStatus('');
    }
  }

 

  return (
    <div className={light ? 'add dark' : 'add light'}>

      <Link to='/' className='add__returnHome'><MdArrowBack/> Return</Link>
      
      <form className='add__form' onSubmit={handleSubmit}>
        <label>Enter patient name: </label>
        <input type='text' placeholder='Doggo' name='Name' onChange={handleInputs}/>
        <label>Enter date of birth:</label>
        <input type='date' name='Date' onChange={handleInputs} min='1900-01-01'/>
        <label>Enter breed:</label>
        <input type='text' placeholder='husky' name='Breed' onChange={handleInputs}/>
        <label>Reason for visit:</label>
        <input type='text' name='RFV' onChange={handleInputs}/>
        <label>Status of patient:</label>
        <input type='text' name='Status' onChange={handleInputs}/>
        <label>Owner name:</label>
        <input type='text' name='Owner' onChange={handleInputs}/>

        {/* <input type='submit' value='Add patient'/> */}
        <button type='submit' className='add__submit' onClick={handleSubmit}>Add Patient</button>
      </form>
    </div>
  )
}

export default Add