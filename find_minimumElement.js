// Find Minimum in Rotated Sorted Array

const findMinimum = (arr) => {
  let l = 0,
    r = arr.length - 1;

  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (arr[m] < arr[m + 1]) r = m;
    else l = m + 1;
  }

  return arr[l];
};

console.log(findMinimum([4, 5, 6, 7, 0, 1, 2]));
