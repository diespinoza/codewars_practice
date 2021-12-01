/* stringIncrementer.js
 * Write a function that increments a string by one. If the string ends with
 *    a number, increment it by one. If the string does not end with a number
 *    append it with '1'. The string number may contain leading zeros which
 *    must be maintained. If the number is incremented to more digits the
 *    leading zeros should be modified accordingly.
 * Arguments: a string
 * Returns: a string
 */
function incrementString (strng) {
  //Find out if the string ends with a number
  let num = strng.match(/\d+$/i);
  if(num != null ){
    //found a number
    let numLength = String(num).length;
    let letters = strng.slice(0,-numLength);
    let incre = Number(num);
    incre++;
    incre = String(incre);
    if(numLength < incre.length){
      //the original number is fewer characters
      return letters + incre;
    } else {
      //the original number is greater than or equal
      return strng.slice(0,-incre.length) + incre;
    }
  } else {
    //didn't find a number
    return strng + '1';
  }
}
