import cartReducer from './cart/cartSlice';
import apiReducer from './api/apiSlice';
import themeReducer from './theme';
import controlReducer from './control/controlSlice';

const reducer = {
  cart: cartReducer,
  api: apiReducer,
  theme: themeReducer,
  control: controlReducer,
};

export default reducer;