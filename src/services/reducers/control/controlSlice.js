import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navOpen: false,
}

export const controlSlice = createSlice({
  name: 'control',
  initialState,
  reducers: {
    openNav: (state) => {
      state.navOpen = true;
    },
    closeNav: (state) => {
      state.navOpen = false;
    },
  },
});

export const {
  openNav, closeNav,
} = controlSlice.actions;

export default controlSlice.reducer;
