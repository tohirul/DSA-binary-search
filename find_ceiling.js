// Find the smallest number in the given array that is greater than or equal to the current number

const findCeiling = (arr, num) => {
  let start = 0,
    end = arr?.length - 1;

  while (start <= end) {
    const focal = Math.floor((start + end) / 2);

    if (arr[focal] === num) return arr[focal];
    if (arr[focal] < num) {
      start = focal + 1;
    } else {
      end = focal - 1;
    }
  }

  return arr[start];
};

console.log(findCeiling([2, 3, 5, 9, 14, 16, 18, 19, 22], 12));
