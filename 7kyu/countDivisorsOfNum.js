/* getDivisorsCnt.js
 * test every number between 1 and n and see if it divides evenly into n
 *  input: a number from 1 to 500,000
 *  returns: the count
 */
function getDivisorsCnt(n){
  let count = 0
  for(let i = 1; i <= n; i++){
    if(n % i === 0) count++
  }
  return count;
}
