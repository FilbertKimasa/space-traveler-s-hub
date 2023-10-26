import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';
const initialState = {
  rockets: [],
  isLoading: false,
  error: undefined,
};

const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await axios.get(baseUrl);
  const { data } = response;
  return data;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rockets = action.payload.map((rocket) => ({
          id: rocket.id,
          name: rocket.rocket_name,
          type: rocket.rocket_type,
          flickr_images: rocket.flickr_images,
          description: rocket.description,
        }));
        state.error = null;
        console.log(state.rockets);
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export { fetchRockets };
export default rocketsSlice.reducer;
