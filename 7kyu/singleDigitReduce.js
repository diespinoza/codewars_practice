/* singleDigit
 * Parameters: Given a number, change it to binary and sum the binary digits
 *          continue doing this until the sum is one digit
 * Arguments: A number between 0 and 10^9
 * Returns: A single integer between 0-9
 */
function singleDigit(n) {
  //If the number is greater 1 digit, keep reducing
  while (n >= 10){
    //Convert to binary then sum the digits and loop again
    n = dec2bin(n).split('').reduce((accul, curr) => {return accul + Number(curr)},0)
  }
  return n
}
//Convert the number to a string of binary
function dec2bin(dec){
  return (dec >>> 0).toString(2);
}
