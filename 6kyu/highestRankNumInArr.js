/* highestRank
 *  Find the mode in the array. If there are two return the larger one
 * inputs: an array of numbers
 * returns: a number representing the mode
 */
function highestRank(arr){
  let mode = {}
  let max = 0
  let count = 0;

  for(let i = 0; i < arr.length; i++){
    const item = arr[i]

    //Create a count indexed by the numbers in the array, the value being the count
    if (mode[item]) {
      mode[item]++
    } else {
      mode[item] = 1
    }
    //If the count is smaller than the count of the current item, update the mode
    if(count < mode[item]){
      max = item;
      count = mode[item]
    }
  }
  return max
}
