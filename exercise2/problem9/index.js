
function duplicateNums(nums) {
  const arr = {};
  const result = [];

  for (const num of nums) {
    if (arr[num]) {
      result.push(num);
    } else {
      arr[num] = true;
    }
  }

  return result.sort((a, b) => a - b); 
}



export default duplicateNums;
