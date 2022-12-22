import { createSlice } from '@reduxjs/toolkit';

const editSlice = createSlice({
    name: 'edit',
    initialState:{
        _id: '',
        patientName: '',
        dateOfBirth: '',
        breed: '',
        reasonForVisit: '',
        status: '',
        Owner: '',
        dateRegistered: ''
    },
    reducers:{
        changeEdit: (state,action)=>{
            
            state._id = action.payload._id;
            state.patientName = action.payload.patientName;
            state.dateOfBirth = action.payload.dob;
            state.breed = action.payload.breed;
            state.reasonForVisit = action.payload.rfv;
            state.status = action.payload.status;
            state.Owner = action.payload.owner;
            state.dateRegistered = action.payload.dateReg;
        }
    }
})

export const { changeEdit } = editSlice.actions;
export default editSlice;