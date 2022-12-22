import { configureStore } from '@reduxjs/toolkit'
import lightSlice from './lighting-slice'
import editSlice from './edit-slice';

const store = configureStore({
    reducer:{
        light: lightSlice.reducer,
        edit: editSlice.reducer
    }
})

export default store;