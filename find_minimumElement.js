// Find Minimum in Rotated Sorted Array

const findMinimum = (arr) => {
  let l = 0,
    r = arr.length - 1;

  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (arr[m] > arr[r]) l = m + 1;
    else r = m;
  }

  return arr[l];
};

console.log(findMinimum([4, 5, 6, 7, 0, 1, 2]));
