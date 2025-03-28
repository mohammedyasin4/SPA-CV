// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/themeSlice'; // Importerar themeslice

const store = configureStore({
  reducer: {
    theme: themeReducer, 
  },
});

export default store;