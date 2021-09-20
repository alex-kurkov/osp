import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalVisible: false,
}

export const controlSlice = createSlice({
  name: 'control',
  initialState,
  reducers: {
    openModal: (state) => {
      state.modalVisible = true;
    },
    closeModal: (state) => {
      state.modalVisible = false;
    },
  }
})

export const {
  openModal,
  closeModal
} = controlSlice.actions;

export default controlSlice.reducer;
