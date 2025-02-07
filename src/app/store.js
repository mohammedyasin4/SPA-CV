import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice'; // Example reducer

// Create the Redux store
const store = configureStore({
  reducer: {
    counter: counterReducer, // Add your reducers here
  },
});

export default store;