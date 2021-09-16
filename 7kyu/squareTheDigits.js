/* squareDigits
 * Given a number, square every digit and concatenate it back into a number
 * arguments: an integer
 * returns: an integer
 */
function squareDigits(num){
   return Number(String(num).split('').map(curr => {return Math.pow(Number(curr),2)}).join(''))
}
