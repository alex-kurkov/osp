import requests from '../../utils/requests';
import { finishRequest, startRequest } from '../../services/reducers/api/apiSlice';
import { addGoods } from '../reducers/cart/cartSlice';

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
