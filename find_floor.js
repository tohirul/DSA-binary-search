// // Find the greatest number in the given array that is lesser than or equal to the current number

const findFloor = (arr, target) => {
  let start = 0,
    end = arr.length - 1,
    floor = -1;
  console.log(`---------------------------`);

  while (start <= end) {
    const focal = Math.floor((start + end) / 2);
    console.log(`start: ${start}, end: ${end}, focal: ${focal}`);
    if (arr[focal] === target) {
      console.log(`Target Located: ${focal}: ${arr[focal]}`);
      return start;
    } else if (arr[focal] > target) {
      console.log(
        `Focal: ${focal}: ${arr[focal]} is greater than the target, reducing end`
      );
      end = focal - 1;
    } else {
      floor = arr[focal];
      console.log(
        `Focal: ${focal}: ${arr[focal]} is smaller than the target, forwarding start`
      );
      start = focal + 1;
    }
  }
  console.log(`Final: ${start}: ${arr[start]}`);
  return floor;
};

console.log(findFloor([2, 3, 5, 9, 14, 16, 18, 19, 22], 4));
console.log(findFloor([2, 3, 5, 9, 14, 16, 18, 19, 22], 9));
console.log(findFloor([2, 3, 5, 9, 14, 16, 18, 19, 22], 12));
console.log(findFloor([2, 3, 5, 9, 14, 16, 18, 19, 22], 19));
