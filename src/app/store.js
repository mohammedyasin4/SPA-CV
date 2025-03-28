import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice'; 

// Skapa Redux store

const store = configureStore({
  reducer: {
    counter: counterReducer, 
  },
});

export default store;