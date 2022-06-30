const number = [
  [1, 3, 5, 7, 9],
  [2, 4, 6, 8, 10],
];

function result(num) {
  const tmp = [];
  for (let i = 0; i < num[0].length; i++) {
    tmp.push(num[0][i]);
    tmp.push(num[1][i]);
  }
  return tmp;
}
console.log(result(number));
