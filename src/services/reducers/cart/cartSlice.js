import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chosen: [],
  goods: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addGoods: (state, action) => {
      state.goods = [...state.goods.concat(action.payload)];
    },
    addIngredient: (state, action) => {
      state.chosen = [...state.chosen.concat(action.payload)];
    },
    removeIngredient: (state, action) => {
      state.chosen = [...state.chosen.reduce((acc, i) => {
        if (i.id === action.payload.id) return acc;
        return [...acc, i];
      }, []) ]
    },
  },
});

export const {
  addIngredient,
  removeIngredient,
  addGoods
} = cartSlice.actions;

export default cartSlice.reducer;
