/* beggars
 * An amount 'n' of beggars line up to receive amounts from list 'values'.
 * They each take turns taking one from the list. How much will each beggar
 * get in total?
 * arguments: an array of values and an amount of beggars
 * returns: an array with the total values received by each beggar
 *
 */
function beggars(values, n){
  //create array and fill with zeros
  let results = new Array(n).fill(0)
  for(let i = 0; i < values.length; i++){
    results[i % n] = results[i % n] + values[i]
  }
  return results
}
