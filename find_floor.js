// // Find the greatest number in the given array that is lesser than or equal to the current number

const findFloor = (arr, target) => {
  let start = 0,
    end = arr.length - 1,
    floor = -1;

  while (start <= end) {
    const focal = Math.floor((start + end) / 2);
    console.log(`-------------------`);
    console.log(
      `start: ${start}, end: ${end}, focal: ${focal}, floor: ${floor}`
    );
    console.log(`Focal Value: ${arr[focal]}`);
    if (arr[focal] === target) {
      console.log(`Target Located: ${focal}: ${arr[focal]}`);
      return arr[focal];
    } else if (arr[focal] > target) {
      console.log(`arr[focal]: ${arr[focal]} > target: ${target}`);
      console.log(`Upating End Point ${end}: ${focal - 1}`);
      end = focal - 1;
    } else {
      console.log(`arr[focal]: ${arr[focal]} < target: ${target}`);

      console.log(`Updating floor from ${floor}: ${arr[focal]}`);
      if (arr[focal] > floor) floor = arr[focal];
      console.log(`Updating Starting Point ${start}: ${focal + 1}`);
      start = focal + 1;
    }
  }
  console.log(`Final: ${floor}`);
  return floor;
};

console.log(findFloor([2, 3, 5, 9, 14, 16, 18, 19, 22], 4));

