export const sortDishes = (arr) => {
  if (!arr && !arr.length) return null;
  const sorted = arr.reduce((acc, item) => {
    const type = item.type;
    if (acc.hasOwnProperty(type)) {
      acc[type] = [...acc[type], item];
      return acc;
    }
    return {...acc, [type] : [item]}
  }, {})
  return sorted;
}
