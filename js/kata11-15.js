/*Kata11 Highest and Lowest */

const NumString = '30 -10 789 -9 5';

function highAndLow(numbers) {
  const splitNumbers = numbers.split(' ');
  const arrayMaxMin = [
    Math.max(...splitNumbers),
    Math.min(...splitNumbers),
  ].join(' ');
  return arrayMaxMin;
}

console.log(highAndLow(NumString));

/*otra solucion  */
// function highAndLow1(numbers) {
//   numbers = numbers.split(' ').map(Number);
//   return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
// }
