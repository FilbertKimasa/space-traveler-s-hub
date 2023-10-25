import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://api.spacexdata.com/v3/missions';
const initialState = {
mission: {},
    isLoading: false,
    error: undefined,
  };

  const fetchMission = createAsyncThunk('mission/fetchMission', async()=> {
    const response = await axios.get(apiUrl);
    return response.date;
  })