import cartReducer from './cart/cartSlice';
import apiReducer from './api/apiSlice';

const reducer = {
  cart: cartReducer,
  api: apiReducer,
};

export default reducer;