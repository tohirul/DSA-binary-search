//  A peak is an element strictly greater than its neighbors. Find a peak element.

const findPeakElement = (arr) => {
  let start = 0,
    end = arr.length - 1;

  while (start < end) {
    const focal = Math.floor((start + end) / 2);

    if (arr[focal] < arr[focal + 1]) start = focal + 1;
    else end = focal;
  }
  console.log(`Final Index: ${start}`);
  return arr[start];
};

console.log(findPeakElement([1, 3, 7, 8, 6, 5, 4]));
