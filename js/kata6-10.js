/*kata6 */

function maps(x) {
  let map = [];
  let acc = 0;
  for (let item of x) {
    acc = item + item;
    map.push(acc);
  }
  return map;
}

console.log(maps([1, 2, 3]));
console.log(maps([5, 6, 7]));
console.log(maps([89, 45, 23]));

/*kata7 */
/*Loop */
function abbrevName3(name) {
  const answer = [name[0]];
  for (let i = 0; i < name.length; i++) {
    if (name[i] === ' ') {
      answer.push(name[i + 1]);
    }
  }
  return answer.map(el => el.toUpperCase()).join('.');
}

/*Array */
function abbrevName2(name) {
  const newArray = name.split(' ');
  return (newArray[0][0] + '.' + newArray[1][0]).toUpperCase();
}

/*Substring */
function abbrevName(name) {
  return name
    .split(' ')
    .map(el => el.substring(0, 1).toUpperCase())
    .join('.');
}

/*Regex */
function abbrevName(name) {
  return name
    .match(/\b(\w)/g)
    .toString()
    .toUpperCase()
    .replace(',', '.');
}

/*Map doing by Daniel */
function abbrevName(name) {
  const result = name.split(' ');
  const result2 = result.map(el => el.charAt(0).toUpperCase());
  return result2.join('.');
}

console.log(abbrevName('daniel moreno'));
console.log(abbrevName('luciano pavaroti gonges'));
