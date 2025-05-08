// find target number in an ascending array of numbers;

const binary_search = (arr, target) => {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    const m = Math.floor((start + end) / 2);
    if (arr[m] === target) return m;
    else if (arr[m] < target) start = m + 1;
    else if (arr[m] > target) end = m - 1;
    else return -1;
  }
};

console.log(binary_search([1, 2, 3, 4, 5, 6], 4));
console.log(binary_search([1, 2, 3, 4, 5, 6], 6));
