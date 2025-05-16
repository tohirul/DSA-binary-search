// Find target in a rotated sorted array

const findPivot = (arr) => {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    const focal = Math.floor((start + end) / 2);

    if (focal < end && arr[focal] > arr[focal + 1]) return focal;
    if (focal > start && arr[focal] < arr[focal - 1]) return focal - 1;

    if (arr[focal] >= arr[start]) start = focal + 1;
    else end = focal - 1;
  }
  return -1;
};

const binarySearch = (target, arr, start, end) => {
  while (start <= end) {
    const focal = Math.floor((start + end) / 2);

    if (arr[focal] === target) return focal;
    if (arr[focal] > target) end = focal - 1;
    else start = focal + 1;
  }
};

const findTarget = (arr, target) => {
  const pivot = findPivot(arr);

  if (pivot === -1) return binarySearch(target, arr, 0, arr.length - 1);
  else if (arr[pivot] === target) return pivot;
  else if (arr[0] <= target) return binarySearch(target, arr, 0, pivot - 1);
  else return binarySearch(target, arr, pivot + 1, arr.length - 1);
};

console.log(findTarget([10, 11, 12, 13, 14, 6, 7, 8, 9], 12));
console.log(findTarget([10, 11, 12, 13, 14, 6, 7, 8, 9], 8));
