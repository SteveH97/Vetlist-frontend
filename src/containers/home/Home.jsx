import React, { useState, useEffect } from 'react'
import './Home.css'
import { useSelector } from 'react-redux'
import PatientCard from '../../components/patientCard/PatientCard'
import PatientDataService from '../patients'
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai'

const Home = () => {

  const light = useSelector(state => state.light.mode);

  const [data, setData] = useState([]);
  const [deleteId, setDeleteId] = useState('');


  const readData = () =>{
    PatientDataService.getAll()
      .then(response=>{
        setData(response.data.patients);
      })
      .catch(e=>{
        console.log(e);
      })
  }

  useEffect(()=>{
    readData();
    setDeleteId('');
  },[deleteId]);


  return (
    <div className={light ? 'home dark' : 'home light'}>

    <Link to='/add' className='home__add'><AiOutlinePlus/>Add a patient</Link>

      {
        data.map(patient =>(
          <PatientCard
            key={patient._id}
            patientName={patient.patientName}
            dob={patient.dateOfBirth}
            breed={patient.breed}
            rfv={patient.reasonForVisit}
            status={patient.status}
            owner={patient.Owner}
            dateReg={patient.dateRegistered}
            _id={patient._id}
            setDeleteId={setDeleteId}
          />
        ))
      }
        
    </div>
  )
}

export default Home