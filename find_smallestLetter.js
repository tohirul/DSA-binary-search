// find the smallest letter in an array greater than the target

const findSmallestLetter = (arr, target) => {
  let start = 0,
    end = arr.length - 1,
    output = arr[0];
  while (start <= end) {
    const focal = Math.floor((start + end) / 2);

    if (arr[focal] > target) {
      output = arr[focal];
      end = focal - 1;
    } else {
      start = focal + 1;
    }
  }
  return output;
};

console.log(findSmallestLetter(["c", "f", "j"], "g"));
console.log(findSmallestLetter(["c", "f", "j"], "e"));
