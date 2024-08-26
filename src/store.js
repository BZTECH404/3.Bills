import { configureStore } from '@reduxjs/toolkit';
import performaReducer from '../src/action/stepperAction'; // Adjust the path based on your folder structure

const store = configureStore({
  reducer: {
    performa: performaReducer,
    // Add other reducers as needed
  },
});

export default store;
