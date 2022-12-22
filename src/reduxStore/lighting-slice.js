import { createSlice } from "@reduxjs/toolkit";

const lightSlice = createSlice({
    name: "lighting",
    initialState:{
        //false = light mode, true = dark mode
        mode: true
    },
    reducers:{
        changeLight(state){
            state.mode = !state.mode;
        }
    }
})


export const { changeLight } = lightSlice.actions;
export default lightSlice;