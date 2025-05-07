//  A peak is an element strictly greater than its neighbors. Find a peak element.

const findPeakElement = (arr) => {
  let l = 0,
    r = arr.length - 1;

  while (l < r) {
    const m = Math.floor((l + r) / 2);

    console.log(`l: ${l}`);
    console.log(`r: ${r}`);
    console.log(`m: ${m}`);
    console.log("-----");

    if (arr[m] < arr[m + 1]) l = m + 1;
    else r = m;
  }
  console.log(`Final: ${l}`);
  return l;
};

console.log(findPeakElement([1, 3, 7, 8, 4, 5, 6, 4]));
