export const Max = (value) => {
  console.log(value);
  let max_val = 0;
  for (let index in value) {
    if (value[index] > max_val) max_val = value[index];
  }
  return max_val;
};
