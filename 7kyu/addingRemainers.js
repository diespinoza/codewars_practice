/* solve
 * given an array of numbers and a divisor, add the remainder of diving each
 *  value in the array by the divisor to the original number in the array
 *  arguments: array of numbers, an integer
 *  returns: an array of numbers
 */
function solve(nums, div) {
  return nums.map((curr) => {return  curr + (curr % div)})
}
