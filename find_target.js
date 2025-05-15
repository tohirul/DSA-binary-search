// Problem: Given a sorted array of integers, return the index of a target value. Return -1 if not found.

const findTarget = (nums, target) => {
  let l = 0,
    r = nums.length - 1;

  do {
    const m = Math.floor((l + r) / 2);
    // console.log(`l: ${l}`);
    // console.log(`r: ${r}`);
    // console.log(`m: ${m}`);
    // console.log("-----");

    if (nums[m] < target) l = m + 1;
    else if (nums[m] > target) r = m - 1;
    else return m;
  } while (l <= r);

  return -1;
};

// console.log(findTarget([1, 2, 3, 4, 5, 6], 4));
console.log(findTarget([1, 2, 3, 4, 5, 6], 6));
