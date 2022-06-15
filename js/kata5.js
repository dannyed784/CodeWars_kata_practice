'use strict';
const array = [1, 5.2, 4, 0, -1];

function sum(arr) {
  let sum = 0;
  for (let i = 0; arr.length > i; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sum(array));

/*Another way to do the kata5 */
function sum1(arr) {
  const totalSum = arr.reduce((acc, el) => acc + el, 0);
  return totalSum;
}

console.log(sum1(array));
