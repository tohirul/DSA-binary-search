// search for a target element in a mountain array
const findPeak = (arr) => {
  let start = 0,
    end = arr.length - 1;

  while (start < end) {
    const focal = Math.floor((start + end) / 2);

    if (arr[focal] < arr[focal + 1]) start = focal + 1;
    else end = focal;
  }

  return start;
};

const binarySearch = (arr, target, start, end, isAscending) => {
  let startChunk = start,
    endChunk = end;
  while (startChunk <= endChunk) {
    const focal = Math.floor((startChunk + endChunk) / 2);
    if (arr[focal] === target) return focal;
    if (isAscending) {
      if (arr[focal] < target) startChunk = focal + 1;
      else endChunk = focal - 1;
    } else {
      if (arr[focal] > target) startChunk = focal + 1;
      else endChunk = focal - 1;
    }
  }
  return -1;
};

const findInMountainArray = (target, arr) => {
  const peak = findPeak(arr);

  const index = binarySearch(arr, target, 0, peak, true);
  if (index !== -1) return index;
  else return binarySearch(arr, target, peak + 1, arr.length - 1, false);
};

console.log(findInMountainArray(9, [1, 3, 8, 12, 9, 5, 2])); // Output: 4
console.log(findInMountainArray(4, [0, 1, 2, 4, 2, 1])); // Output: 3
console.log(findInMountainArray(0, [1, 2, 3, 5, 3, 1])); // Output: -1
console.log(findInMountainArray(3, [1, 2, 3, 4, 5, 3, 1])); // Output: 2
