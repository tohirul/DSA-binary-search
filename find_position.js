// find first and last position of element in sorted array

const findPosition = (arr, target, findStartIndex = false) => {
  let start = 0,
    end = arr.length - 1,
    position = -1;

  while (start <= end) {
    const focal = Math.floor((start + end) / 2);

    if (arr[focal] > target) end = focal - 1;
    else if (arr[focal] < target) {
      start = focal + 1;
    } else {
      position = focal;
      if (findStartIndex) {
        end = focal - 1;
      } else {
        start = focal + 1;
      }
    }
  }
  return position;
};

const binarySearch = (arr, target) => {
  const firstInstance = findPosition(arr, target, true);
  const lastInstance = findPosition(arr, target);

  return [firstInstance, lastInstance];
};

console.log(binarySearch([2, 4, 5, 7, 7, 8, 8, 11], 8));
console.log(binarySearch([2, 4, 5, 7, 7, 8, 8, 11], 7));
console.log(binarySearch([2, 4, 5, 7, 7, 8, 8, 11], 9));
