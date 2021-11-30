import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentMeal: null,
    listMeal: [],
};

const random = createAction('meal/random');
const search = createAction('meal/search');


const meal = createSlice({
    name: 'meal',
    initialState: initialState,
    reducers:{
        
    }
})
