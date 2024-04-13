/***********************************************************************
 * BONUS PROBLEM
************************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

const permutations = (array) => {
  let newArr = [];
  if (array.length === 0) return [];
  if (array.length === 1) return [array];

  for (let i = 0; i < array.length; i++) {
    let num = array[i]
    let otherNums = array.slice(0, i).concat(array.slice(i + 1))
    let permutationsNums = permutations(otherNums);
    for (let j = 0; j < permutationsNums.length; j++) {
      let permutationsArray = [num].concat(permutationsNums[j])
      newArr.push(permutationsArray);
    }
  }
  return newArr;
};
// const permutations = arr => {
//   if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
//   return arr.reduce(
//     (acc, item, i) =>
//       acc.concat(
//         permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
//           item,
//           ...val,
//         ])
//       ),
//     []
//   );
// };
console.log(permutations([1, 2])) // [[1, 2], [2, 1]]
console.log(permutations([1, 2, 3])) // [[1, 2, 3], [1, 3, 2],
// [2, 1, 3], [2, 3, 1],
// [3, 1, 2], [3, 2, 1]]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
