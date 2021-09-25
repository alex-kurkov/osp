import cartReducer from './cart/cartSlice';
import apiReducer from './api/apiSlice';
import themeReducer from './theme/themeSlice';

const reducer = {
  cart: cartReducer,
  api: apiReducer,
  theme: themeReducer,
};

export default reducer;