import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { mealServies } from '../../services/MealServices';
import { randomMeal } from './mealAPI';

const initialState = {
    currentMeal: null,
    listMeal: [],
};

export const updateCurrentMeal = createAsyncThunk(
    'meal/randomMeal',
    async () => {
        const {data} = await randomMeal();
        return data?.meals[0]
      // The value we return becomes the `fulfilled` action payload
    }
  );

const meal = createSlice({
    name: 'meal',
    initialState: initialState,
    reducers:{
        selectcurrentMeal: (state)=>state.currentMeal
    },
    extraReducers: (builder) => {
        builder.addCase(updateCurrentMeal.fulfilled, (state,action) => {
            state.currentMeal = action.payload
        })
    }

})

const { reducer, actions } = meal;
export const {selectcurrentMeal} = actions;
export default reducer;