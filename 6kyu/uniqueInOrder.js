/* uniqueInOrder
 * parameters: remove the consecutively repeated elements from the array
 * arguments: an array with repeated elements
 * returns: a new array
 */
var uniqueInOrder=function(iterable){
  //Loop through every element, if the next element is equal to the current, do nothing. If not, add it to a new array
  let result = []
  for(let i = 0; i < iterable.length; i++){
    if(iterable[i] != iterable[i+1]){
      result.push(iterable[i])
    }
  }
  return result
}
