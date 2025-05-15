// order agnostic binary binary_search

const binary_search = (arr, target) => {
  let start = 0,
    end = arr.length - 1;

  const order = arr[start] > arr[end] ? "desc" : "asc";

  while (start <= end) {
    const focal = Math.floor((start + end) / 2);
    if (arr[focal] === target) return focal;

    if (order === "asc")
      if (arr[focal] < target) start = focal + 1;
      else if (arr[focal] > target) end = focal - 1;
      else return -1;
    else if (order === "desc")
      if (arr[focal] > target) start = focal + 1;
      else if (arr[focal] < target) end = focal - 1;
      else -1;
    else return m;
  }
};

console.log(binary_search([1, 2, 3, 4, 5, 6], 4), 4, "asc");

console.log(binary_search([12, 11, 8, 7, 5, 4, 2, 1, -2, -4], 8), 8, "desc");
