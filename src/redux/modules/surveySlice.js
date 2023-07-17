import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import React from 'react';
import axios from 'axios';

const initialState = [];

export const __getSurvey = createAsyncThunk('survey/getSurvey', async (payload, thunkAPI) => {
  try {
    const response = await axios.get('http://localhost:4000/survey');
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {}
});

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {},
  extraReducers: {
    [__getSurvey.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.survey;
    }
  }
});

export default surveySlice;
