/* decodePass
 * Decode an array of 8 bit binary numbers into their character codes and join
 * Find if the passArr contains the resulting string, if not return false
 * arguments: array of passwords, string of binary numbers
 * returns: the string if found, false if not found
 */
function decodePass( passArr, bin ){
  //binary file. Split it into spaces, turn each byte into int, then into to character
  let output = bin.split(' ').map(curr => String.fromCharCode(parseInt(curr,2))).join('')
  if(passArr.includes(output)) return output;
  return false;
}
