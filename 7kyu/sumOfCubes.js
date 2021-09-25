/* squareDigits
 * Find the sum of all the integers from 1 to n
 * arguments: a positive integer
 * returns: the sum of the squares
 */
function sumCubes(n){
  let sum = 0;
  for(let i = 1; i <= n; i++){
    sum = sum + Math.pow(i,3)
  }
  return sum
}
