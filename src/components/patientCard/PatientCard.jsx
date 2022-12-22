import React from 'react'
import './Patient.css'
import PatientDataService from '../../containers/patients'
import { motion } from 'framer-motion' 
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeEdit } from '../../reduxStore/edit-slice'
import { AiOutlineEdit } from 'react-icons/ai'
import { MdDeleteOutline } from 'react-icons/md'

const PatientCard = ({patientName, dob, breed, rfv, status, owner, dateReg, _id, setDeleteId}) => {

  const Edit = useDispatch();

  const handleEdit = () =>{
    Edit(changeEdit({_id, patientName, dob, breed, rfv, status, owner, dateReg}));
  }

  const handleDelete = () =>{
    
    
    PatientDataService.deletePatient(_id)
      .then(response =>{
        console.log(response.data);
        alert("Patient has been deleted!");
        setDeleteId(_id);
      })
      .catch(e =>{
        console.log(e);
      })
  }

  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{ duration: .5}}
      className='patientCard'
    >
      
      <div className='patientCard__info'>
        <h5>Patient Name: {patientName}</h5>
        <h5>DOB: {dob}</h5>
        <h5>Breed: {breed}</h5>
        <h5>Reason for visit: {rfv}</h5>
        <h5>Status: {status}</h5>
        <h5>Owner: {owner}</h5>
        <h5>Date Registered: {dateReg}</h5>
      </div>

      <div className='patientCard__buttons'>
        <Link to='/edit' onClick={handleEdit} name='edit' className='patientCard__buttons-edit'><AiOutlineEdit/>Edit</Link>
        <button name='delete' className='patientCard__buttons-delete' onClick={handleDelete}><MdDeleteOutline/> Delete</button>
      </div>
    </motion.div>
  )
}

export default PatientCard