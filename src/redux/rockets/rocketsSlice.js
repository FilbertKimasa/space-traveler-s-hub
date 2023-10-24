import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';
const initialState = {
  rockets: {},
  isLoading: false,
  error: undefined,
};

const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await axios.get(baseUrl);

  //   if (response.status !== 200) {
  //     throw new Error('Failed to fetch rockets');
  //   }
  const { data } = response;
  console.log(data);
  return data;
});

// eslint-disable-next-line no-unused-vars
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
        state.rockets = action.payload;
        state.error = null;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default rocketsSlice.reducer;
