function removeDuplicates(nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] !== nums[j]) {
        i++;
        nums[i] = nums[j];
      }
    }
    return i + 1; // Return the length of the modified array
  }
  
  const nums = [1, 1, 3, 4, 5, 5];
  const length = removeDuplicates(nums);
  
// console.log(length)

  console.log(nums.slice(0, length)); // Output: [1, 2, 3, 4, 5]
  