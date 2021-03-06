import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chosen: [],
  goods: [],
  drinks: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addGoods: (state, action) => {
      const dishes = [...action.payload].sort((a, b) => a['order'] - b['order']);
      state.goods = dishes;
    },
    addDrinks: (state, action) => {
      const drinks = [...action.payload].sort((a, b) => a['order'] - b['order']);
      state.drinks = drinks;
    },
    setChosen: (state, action) => {
      state.chosen = [...action.payload];
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
  setChosen,
  addIngredient,
  removeIngredient,
  addGoods,
  addDrinks
} = cartSlice.actions;

export default cartSlice.reducer;
