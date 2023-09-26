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

const array = [1, 2, 3, 4, 5];

function recFor(array, sum, i) {
  if (array.length === 0) {
    return sum;
  }
  console.log("Niz:", array.indexOf(i + 1));
  sum += array.indexOf(i);
  //array.shift();
  console.log("Array je:", array);
  return recFor(array, sum, i);
}

console.log("Sum:", recFor(array, 0, 0));
console.log("ARRAY: ", array);
