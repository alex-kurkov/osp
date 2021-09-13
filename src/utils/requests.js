import { API_URL } from '../services/constants';

const getGoodsRequest = () => fetch(
  `${API_URL}/goods`,
)
.then((res) => res.json())

const requests = {
  getGoodsRequest,
};

export default requests;