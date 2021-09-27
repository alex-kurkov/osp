export const API_URL='https://api.eda89.ru';

const getGoodsRequest = async () => await fetch(
  `${API_URL}/goods`,
)
  .then((res) => res.json())
  .catch(e => console.log('Похоже, нет интернета...', e))
const getBeveragesRequest = async () => await fetch(
  `${API_URL}/beverages`,
)
  .then((res) => res.json())
  .catch(e => console.log('Похоже, нет интернета...', e))

const requests = {
  getGoodsRequest,
  getBeveragesRequest
};

export default requests;