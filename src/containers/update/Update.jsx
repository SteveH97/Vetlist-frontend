import React, { useState } from 'react'
import './Update.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'
import PatientDataService from '../patients'

const Update = () => {

  const light = useSelector(state => state.light.mode);
  const {_id, patientName, dateOfBirth, breed, reasonForVisit, status, Owner, dateRegistered } = useSelector(state => state.edit);

  const [newStatus, setNewStatus] = useState('');
  const [newOwner, setNewOwner] = useState('');

  const handleInput = (e) =>{
    e.preventDefault();

    switch(e.target.name){
      case 'Status':
        setNewStatus(e.target.value);
        break;

      case 'Owner':
        setNewOwner(e.target.value);
        break;

      default:
        break;
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    let data = {
      _id: _id,
      status: '',
      Owner: ''
    }

    if(newStatus === '' && newOwner !== ''){
      data.status = status;
      data.Owner = newOwner;
      console.log(data._id + " " + data.status + " " + data.Owner );
    }else if(newStatus !== '' && newOwner === ''){
      data.status = newStatus;
      data.Owner = Owner;
      console.log(data._id + " " + data.status + " " + data.Owner );

    }else{
      data.status = newStatus;
      data.Owner = newOwner;
    }

    PatientDataService.updatePatient(JSON.stringify(data))
      .then(response =>{
        console.log(response.data);
        alert("Patient has been updated!");
      })
      .catch(e =>{
        console.log(e);
      })
  }  


  return (
    <div className={light ? 'update dark' : 'update light'}>

        <Link to='/' className='update__returnHome'><MdArrowBack/> Return</Link>
      

      <form className='update__form' onSubmit={handleSubmit}>
          <h5>Name: {patientName}</h5>
          <h5>DOB: {dateOfBirth}</h5>
          <h5>Breed: {breed}</h5>
          <h5>Reason of visit: {reasonForVisit}</h5>
          <label>Current status: {status}</label> 
          <input type='text' placeholder='Change status...' name='Status' onChange={handleInput}/>
          <label>Current owner: {Owner}</label>
          <input type='text' placeholder='Change owner...' name='Owner' onChange={handleInput}/>
          <h5>Date Registered: {dateRegistered}</h5>
          <br/>
          <input type='submit' value='Change'/>
      </form>
      
    </div>
  )
}

export default Update