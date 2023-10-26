import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './Mission/MissionSlice';

const store = configureStore({
  reducer: {
    missions: missionReducer,
  },
import rocketsReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: { rockets: rocketsReducer },
});

export default store;
