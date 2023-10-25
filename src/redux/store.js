import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './Mission/MissionSlice';

const store = configureStore({
  reducer: {
    missions: missionReducer,
  },
});

export default store;
