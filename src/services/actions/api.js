import requests from '../../utils/requests';
import { finishRequest, startRequest } from '../../services/reducers/api/apiSlice';
import { addDrinks, addGoods } from '../reducers/cart/cartSlice';

const _handleError = (e) => console.error(e.message);

export const getGoods = () => async (dispatch) => {
  dispatch(startRequest());
  await requests.getGoodsRequest()
    .then((res) => {
      dispatch(addGoods(res))
    
    })
    .catch(_handleError)
    .finally(() => dispatch(finishRequest()));
};
export const getBeverages = () => async (dispatch) => {
  dispatch(startRequest());
  await requests.getBeveragesRequest()
    .then((res) => {
      dispatch(addDrinks(res))
    
    })
    .catch(_handleError)
    .finally(() => dispatch(finishRequest()));
};
