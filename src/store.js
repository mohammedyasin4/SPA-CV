// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/themeSlice'; // Import the theme slice

const store = configureStore({
  reducer: {
    theme: themeReducer, // Add the theme reducer to the store
  },
});

export default store;