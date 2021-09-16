export const API_URL='https://api.eda89.ru';

const getGoodsRequest = () => fetch(
  `${API_URL}/goods`,
)
.then((res) => res.json())

const requests = {
  getGoodsRequest,
};

export default requests;