import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  apiRequestInProgress: false,
}

export const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    startRequest: (state) => {
      state.apiRequestInProgress = true;
    },
    finishRequest: (state) => {
      state.apiRequestInProgress = false;
    },
  },
});

export const {
  startRequest, finishRequest,
} = apiSlice.actions;

export default apiSlice.reducer;
