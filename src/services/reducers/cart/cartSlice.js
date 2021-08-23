import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chosenIngredients: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addIngredient: (state, action) => {
      state.chosenIngredients = [...state.chosenIngredients.concat(action.payload)];
    },
    removeIngredient: (state, action) => {
      state.chosenIngredients = [
        ...state.chosenIngredients.slice(0, action.payload.positionIndex),
        ...state.chosenIngredients.slice(action.payload.positionIndex + 1),
      ];
    },
  },
});

export const {
  addIngredient,
  removeIngredient,
} = cartSlice.actions;

export default cartSlice.reducer;
