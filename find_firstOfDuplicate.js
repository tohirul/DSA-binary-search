//  In a sorted array with duplicates, return the first occurrence of a target value.

const findFirstOccurrence = (arr, target) => {
  let index = -1,
    l = 0,
    r = arr.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] < target) l = mid + 1;
    else if (arr[mid] > target) r = mid - 1;
    else {
      index = mid;
      r = mid - 1;
    }
  }
  console.log(index);
  return index;
};

findFirstOccurrence([1, 2, 2, 2, 3, 4], 2);
findFirstOccurrence([1, 2, 2, 2, 3, 4, 4, 5], 4);
