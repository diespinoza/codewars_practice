/* arrayDiff
 *  Given two lists, subtract the elements of the second list from the first
 *  return the remaining elements of the first list
 *  arguments: two arrays of numbers
 *  returns: an array witht the remaining numbers
 *
 */
function arrayDiff(a, b) {
  b.forEach((currB) => {
   a = a.filter((currA) => {
      if(currA != currB) {return currA}
    })
  })
  return a
}
