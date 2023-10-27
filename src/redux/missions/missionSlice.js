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
  reducers: {
    joinMission: (state, action) => {
      /* eslint-disable camelcase */
      const { mission_id } = action.payload;
      /* eslint-disable camelcase */
      state.missions = state.missions.map((mission) => {
        if (mission.id === mission_id) {
          return {
            ...mission,
            join: !mission.join,
          };
        }
        return mission;
      });
    },

  },

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

export const { joinMission } = missionSlice.actions;
export default missionSlice.reducer;
