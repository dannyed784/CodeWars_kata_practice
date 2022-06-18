/*kata6 */

// function maps(x) {
//   let map = [];
//   let acc = 0;
//   for (let item of x) {
//     acc = item + item;
//     map.push(acc);
//   }
//   return map;
// }

// console.log(maps([1, 2, 3]));
// console.log(maps([5, 6, 7]));
// console.log(maps([89, 45, 23]));

/*kata7 */
/*Loop */
// function abbrevName3(name) {
//   const answer = [name[0]];
//   for (let i = 0; i < name.length; i++) {
//     if (name[i] === ' ') {
//       answer.push(name[i + 1]);
//     }
//   }
//   return answer.map(el => el.toUpperCase()).join('.');
// }

/*Array */
// function abbrevName2(name) {
//   const newArray = name.split(' ');
//   return (newArray[0][0] + '.' + newArray[1][0]).toUpperCase();
// }

/*Substring */
// function abbrevName(name) {
//   return name
//     .split(' ')
//     .map(el => el.substring(0, 1).toUpperCase())
//     .join('.');
// }

/*Regex */
// function abbrevName(name) {
//   return name
//     .match(/\b(\w)/g)
//     .toString()
//     .toUpperCase()
//     .replace(',', '.');
// }

/*Map doing by Daniel */
function abbrevName(name) {
  const result = name.split(' ');
  const result2 = result.map(el => el.charAt(0).toUpperCase());
  return result2.join('.');
}

// console.log(abbrevName('daniel moreno'));
// console.log(abbrevName('luciano pavaroti gonges'));

/*kata8 */
// function simpleMultiplication(number) {
//   const multi = number % 2 == 0 ? number * 8 : number * 9;
//   return multi;
// }

// console.log(simpleMultiplication(1));
// console.log(simpleMultiplication(2));

/*kata 9 */

// function updateLight(current) {
//   if (current === 'green') {
//     return 'yellow';
//   } else if (current === 'yellow') {
//     return 'red';
//   } else if (current === 'red') {
//     return 'green';
//   }
// }

// console.log(updateLight('yellow'));

/*kata10  Reverse words*/

function reverseWords1(str) {
  const reverseStr = str.split('').reverse().join('');
  const reverseStrSecound = reverseStr.split(' ').reverse().join(' ');
  return reverseStrSecound;
}

//Otras soluciones:
function reverseWord2(str) {
  return str
    .split(' ')
    .map(function (word) {
      return word.split('').reverse().join('');
    })
    .join(' ');
}

function reverseWords(str) {
  let reversedWord = '';
  let reversedStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      reversedWord = str[i] + reversedWord;
    } else {
      reversedStr += reversedWord + ' ';
      reversedWord = '';
    }
  }
  console.log(reversedStr);
  return reversedStr + reversedWord;
}

console.log(reverseWords('Daniel Moreno Patino'));
