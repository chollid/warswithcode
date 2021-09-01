let summation = (num) => {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }

  let final = arr.reduce((a, b) => a + b);
  return final;
};
