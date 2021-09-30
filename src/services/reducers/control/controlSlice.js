import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navOpen: false,
  notifications: [],
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
    addNotification: (state, action) => {
      state.notifications = [...state.notifications, action.payload];
    },
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(i => i.id !== action.payload);
    },
  },
});

export const {
  openNav, closeNav, addNotification, removeNotification
} = controlSlice.actions;

export default controlSlice.reducer;
