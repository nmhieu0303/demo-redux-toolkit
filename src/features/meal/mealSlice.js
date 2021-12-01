import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { mealServies } from '../../services/MealServices';

const initialState = {
    currentMeal: null,
    listMeal: [],
};

export const randomMeal = createAsyncThunk(
    'meal/randomMeal', 
    async (params,thunkApi) => {
        console.log(`thunkApi`, thunkApi)
        const {data} = await mealServies.random();
        thunkApi.dispatch(setCurrentMeal(data?.meals[0])) 
      // The value we return becomes the `fulfilled` action payload
    }
  );

export const searchMeal = createAsyncThunk(
    'meal/randomMeal', 
    async (params,thunkApi) => {
        const {data} = await mealServies.search(params.keyword);
        thunkApi.dispatch(setListMeal(data?.meals)) 
      // The value we return becomes the `fulfilled` action payload
    }
);

const meal = createSlice({
    name: 'meal',
    initialState: initialState,
    reducers:{
        selectcurrentMeal: (state)=>state.currentMeal,
        setCurrentMeal: (state,action)=> {state.currentMeal = action.payload;},
        setListMeal: (state,action)=> {state.listMeal = action.payload; }
    },

    extraReducers: (builder) => {

    }

})

const { reducer, actions } = meal;
export const {selectcurrentMeal,setCurrentMeal,setListMeal} = actions;
export default reducer;