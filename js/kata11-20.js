/*Kata11 Highest and Lowest */

// const NumString = '30 -10 789 -9 5';

// function highAndLow(numbers) {
//   const splitNumbers = numbers.split(' ');
//   const arrayMaxMin = [
//     Math.max(...splitNumbers),
//     Math.min(...splitNumbers),
//   ].join(' ');
//   return arrayMaxMin;
// }

// console.log(highAndLow(NumString));

/*otra solucion  */
// function highAndLow1(numbers) {
//   numbers = numbers.split(' ').map(Number);
//   return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
// }

/*kata12 */ /*Number of series */ /*TERMINAR EL CERO */
// function sumSeries(n) {
//   let sum = 0;
//   let a = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += 1 / (1 + a);
//     a += 3;
//   }
//   return sum.toFixed(2);
// }

// console.log(sumSeries(5));

/*kata13 */ /*find the needle */

// const junkArray = ['needle', 'hay', 'need', 'yunk', 'randomJunk'];

// function findNeedle(haystack) {
//   for (let el of haystack) {
//     if (el === 'needle') {
//       return `Found the needle at position ${haystack.indexOf(el)}`;
//     }
//   }
// }

// console.log(findNeedle(junkArray)); *Mumbling */

/*kata14 */

// function mumbling(str) {
//   [...str].map(function (el, index) {
//     console.log(el, index);
//   });
// }

// mumbling('refri');

// /*kata15*/

// function boolWord(bool) {
//   if (bool == false) {
//     return 'No';
//   } else if (bool == true) {
//     return 'Yes';
//   }
// }

// console.log(boolWord(true));

/*kata16 Exes and Ohs */

const str = 'zzoo';
function XO(str) {
  const arr = str.split('');
  const arrX = arr.filter(elx => {
    return elx == 'x' || elx == 'X';
  });
  const arrO = arr.filter(elo => {
    return elo == 'o' || elo == 'O';
  });
  return arrX.length === arrO.length;
}

console.log(XO(str));
