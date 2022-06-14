/*Daniel Solution*/
function solution(str) {
  let str2 = [...str].reverse().join('');
  return str2;
}

console.log(solution(['w', 'o', 'r', 'd']));
