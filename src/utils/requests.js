export const API_URL='https://api.eda89.ru';

const getGoodsRequest = async () => await fetch(
  `${API_URL}/goods`,
)
  .then((res) => res.json())
  .catch(e => console.log('Похоже, нет интернета...', e))

const requests = {
  getGoodsRequest,
};

export default requests;