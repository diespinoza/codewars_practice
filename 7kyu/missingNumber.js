/* missingNo
 * Given an unsorted list of number between 1 and 100, find the missing number
 * inputs: array of number with 99 numbers
 * returns: the single missing number
 */
function missingNo(nums) {
  return 5050 - nums.reduce((accul, curr) => {return accul + curr  }, 0)
}
