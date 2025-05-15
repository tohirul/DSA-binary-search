// find target number in an descending array of numbers;

const binary_search = (arr, target) => {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    const focal = Math.floor((start + end) / 2);

    if (arr[focal] === target) return focal;
    else if (arr[focal] > target) start = focal + 1;
    else if (arr[focal] < target) end = focal - 1;
    else return -1;
  }
};

console.log(binary_search([12, 11, 8, 7, 5, 4, 2, 1, -2, -4], 8), 8);

console.log(binary_search([12, 11, 8, 7, 5, 4, 2, 1, -2, -4], 2), 2);

console.log(binary_search([12, 11, 8, 7, 5, 4, 2, 1, -2, -4], -4), -4);
