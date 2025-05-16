// Find the number of rotations on a rotated sorted array

const rotation = (arr) => {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    const focal = Math.floor((start + end) / 2);

    if (end > focal && arr[focal] > arr[focal + 1]) return focal + 1;
    if (start < focal && arr[focal] < arr[focal - 1]) return focal;
    if (arr[start] >= arr[focal]) end = focal - 1;
    else start = focal + 1;
  }
  return 0;
};

const countRotation = (arr) => {
  return rotation(arr);
};
