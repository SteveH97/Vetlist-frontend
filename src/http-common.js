import axios from 'axios';

//create base url for the backend and declares the document type for express
export default axios.create({
  // baseURL: "http://localhost:5000/api/v1/patients",
  baseURL: "https://backend-vet.up.railway.app/api/v1/patients",
    headers:{
        "Content-Type": "application/json"
    }
}) 