// Find the smallest number in the given array that is greater than or equal to the current number

const findCeiling = (arr, num) => {
  let start = 0,
    end = arr?.length - 1,
    ceil = -1;

  while (start <= end) {
    const focal = Math.floor((start + end) / 2);
    console.log(`-------------------`);
    console.log(`start: ${start}, end: ${end},focal: ${focal}, ceil: ${ceil}`);
    console.log(`Focal Value: ${arr[focal]}`);
    if (arr[focal] === num) {
      console.log(`Ceil Located: ${ceil}: ${arr[ceil]}`);
      return arr[focal];
    }
    if (arr[focal] < num) {
      console.log(`arr[focal]: ${arr[focal]} < num: ${num}`);
      console.log(`Upating Starting Point ${start}: ${focal + 1}`);
      start = focal + 1;
    } else {
      console.log(`arr[focal]: ${arr[focal]} > num: ${num}`);
      console.log(`Updating Ceil from ${ceil}: ${arr[focal]}`);
      ceil = arr[focal];
      console.log(`Updating End Point ${end}: ${end - 1}`);
      end = focal - 1;
    }
  }
  console.log(`Final Value: ${ceil}`);
  return ceil;
};

console.log(findCeiling([2, 3, 5, 9, 14, 16, 18, 19, 22], 20));
