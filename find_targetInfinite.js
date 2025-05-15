// find target value in an infinite array;

const binarySearch = (arr, target) => {
  let start = 0,
    end = 1;

  while (target > arr[end]) {
    const tempStart = end + 1;
    end += (end - start + 1) * 2;
    start = tempStart;
  }
  while (arr[end] === undefined) {
    end--;
  }
  console.log(end);
  while (start <= end) {
    const focal = Math.floor((start + end) / 2);

    if (arr[focal] === target) return focal;
    else if (arr[focal] > target) end = focal - 1;
    else start = focal + 1;
  }
  return -1;
};

// console.log(
//   binarySearch(
//     [
//       12, 14, 19, 23, 25, 29, 38, 46, 51, 52, 53, 57, 61, 66, 67, 69, 72, 74,
//       83, 85,
//     ],
//     38
//   )
// );

console.log(binarySearch([12, 14, 19, 23, 25, 29, 38, 46, 51], 38));
