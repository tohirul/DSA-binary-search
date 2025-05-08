// Search for a target in a rotated sorted array.

const findTargetMinimum = (arr, target) => {
  let l = 0,
    r = arr.length - 1,
    index = -1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    if (arr[m] === target) {
      index = m;
      break;
    }

    // check if left side is sorted

    // sourcery skip: merge-else-if
    if (arr[l] <= arr[m]) {
      if (arr[l] <= target && target < arr[m]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else {
      if (arr[m] < target && target <= arr[r]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
    //  right side is sorted
  }

  return index;
};

//
console.log(
  findTargetMinimum(
    [
      27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
      45, 46, 47, 48, 49, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
      16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
    ],
    0
  )
);
