export const filterByProp = (data, filterPropArr, property) => {
  let output = [];
  filterPropArr.forEach((prop) => {
    output = [...output, ...data.filter((item) => item[property] === prop)];
  });
  return output;
};
