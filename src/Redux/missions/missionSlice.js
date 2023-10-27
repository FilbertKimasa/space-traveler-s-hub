import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://api.spacexdata.com/v3/missions';
const initialState = {
  missions: [],
  isLoading: false,
  error: undefined,
};

export const fetchMission = createAsyncThunk('mission/fetchMission', async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchMission.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchMission.fulfilled, (state, action) => {
        state.isLoading = false;
        state.missions = action.payload.map((mission) => ({
          id: mission.mission_id,
          mission_name: mission.mission_name,
          description: mission.description,

        }));
      })
      .addCase(fetchMission.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default missionSlice.reducer;
