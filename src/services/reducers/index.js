import cartReducer from './cart/cartSlice';
import apiReducer from './api/apiSlice';
import themeReducer from './theme/themeSlice';
import controlSlice from './control/controlSlice';

const reducer = {
  cart: cartReducer,
  api: apiReducer,
  theme: themeReducer,
  control: controlSlice,
};

export default reducer;