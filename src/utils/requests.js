export const API_URL='https://api.eda89.ru';

const getGoodsRequest = async () => await fetch(
  `${API_URL}/goods`,
)
.then((res) => res.json())

const requests = {
  getGoodsRequest,
};

export default requests;