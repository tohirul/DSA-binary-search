// In a sorted array with duplicates, return the last occurrence of a target value.

const findLastOccurrence = (arr, target) => {
  let l = 0,
    r = arr.length - 1,
    index = -1;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (arr[m] < target) l = m + 1;
    else if (arr[m] > target) r = m - 1;
    else {
      index = m;
      l = m + 1;
    }
  }
  console.log(index);
  return index;
};
findLastOccurrence([1, 2, 2, 2, 3, 4], 2);
