/* isSquare
 * find out if the entire array of numbers are perfect squared
 * arguments: array of numbers
 * returns: true if all perfect squares. false if not
 */
var isSquare = function(arr){
  //check if every element in the array is a square number
  if(arr.length === 0) return undefined
  for(let i = 0; i < arr.length; i++){
    //take square root and see if it has decimal places
    if(Math.sqrt(arr[i]) % 1 != 0){
      //not a perfect square
      return false
    }
    //continue looping,
  }
  return true
}
