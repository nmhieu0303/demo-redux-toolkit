import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import mealSlice from '../features/meal/mealSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    meal:mealSlice,
  },
});
