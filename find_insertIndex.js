// Return the index where the target should be inserted in the sorted array.

const findInsert = (arr, target) => {
  let l = 0,
    r = arr.length - 1;

  while (l <= r) {
    console.log(`l: ${l}; r: ${r}`);
    const m = Math.floor((l + r) / 2);
    console.log(`m: ${m}`);
    if (arr[m] < target) {
      l = m + 1;
    } else if (arr[m] > target) {
      r = m - 1;
    } else return m;
  }
  console.log(`l: ${l}`);
  return l;
};
const arr = [1, 3, 5, 6];
// console.log(findInsert(arr, 2));
// console.log(findInsert(arr, 4));
console.log(findInsert(arr, 7));

console.log("Array: ", arr);
