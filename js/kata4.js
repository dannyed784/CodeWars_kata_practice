/*
se uso reduce()
funcion reducer
reduce(arrow-function, valorInicial que va tener el elemento(el)
array.reduce((accumulator, el)=>accumulator + el, 0)
*/

function grow(x) {
  const multi = x.reduce((acum, el) => acum * el);
  return multi;
}

console.log(grow([1, 2, 3, 4]));
