/*Daniel solution */

function countSheeps(arrayOfSheep) {
  let array = [];
  let lg = arrayOfSheep.length;
  for (let i = 0; i < lg; i++) {
    let elem = arrayOfSheep[i];
    if (elem === false) {
      continue;
    } else if (elem === null) {
      continue;
    } else if (elem === undefined) {
      continue;
    }
    array.push(elem);
  }
  return array.length;
}

array2 = [false, true, true, true, false, undefined, null, true];

/*Verificar este codigo: solucion de un segundo */
console.log(countSheeps(array2));
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
