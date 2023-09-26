// function recFor(i, max) {
//   console.log(i);
//   if (i < 20) {
//     recFor(i + 1, max);
//   }
// }

// function recFor(i, max) {
//   if (i > max) {
//     return i;
//   }
//   console.log(i);
//   recFor(i + 1, max);
// }

// recFor(1, 20);

const array = [1, 2, 3];

function recSum(array) {
  if (array.length === 0) {
    return 0;
  } else if (array.length === 1) {
    return array[0];
  }

  // const [first, ...rest] = array;
  const first = array[0];
  const rest = array.slice(1);

  return first + recSum(rest);
  // console.log("Niz:", array.indexOf(i + 1));
  // sum += array.indexOf(i);
  //array.shift();
  //console.log("Array je:", array);
  // return recFor(array, sum, i);
}

console.log("Sum:", recSum(array));
console.log("ARRAY: ", array);
