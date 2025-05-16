// Find Max elemennt in a rotated sorted array

const findMaximum = (arr) => {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    const focal = Math.floor((start + end) / 2);

    if (focal < end && arr[focal] > arr[focal + 1]) return focal;
    if (focal > start && arr[focal] < arr[focal - 1]) return focal - 1;

    if (arr[focal] <= arr[start]) end = focal - 1;
    else start = focal + 1;
  }
};

console.log(findMaximum([10, 11, 12, 13, 7, 8, 9]));
console.log(findMaximum([5, 6, 7, 8, 9, 12, 11, 10]));
