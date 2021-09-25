import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  active: 'dark'
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.active = state.active === 'dark' ? 'light' : 'dark';
    },
    setTheme: (state, action) => {
      console.log(state)
      console.log(action)
      state.active = action.payload;
    },
  }
})

export const {
  toggleTheme,
  setTheme
} = themeSlice.actions;

export default themeSlice.reducer;
