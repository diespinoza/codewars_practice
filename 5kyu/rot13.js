/* rot13.js
 * given an string of characters, replace each letter with the letter 13
 *  places after it in the alphabet.
 * Special characters are returned as is
 * Capital letters go from A at 0040 (65) to Z at 005A (90)
 * Lower letters go from a at 0061 (97) to z at 007A (122)
 */
function rot13(message){
  //split the string into array of chars, go through each char, if its a letter, find the letter 13 places after is an replace it
  //return the final string
  cyphered = message.split('')
  for(let i = 0; i < message.length; i++){
    let thisChar = message.charCodeAt(i);
    console.log(message[i] + " code is: " + thisChar);
    //uppercase
    if(thisChar >= 65 && thisChar <= 90){
      //do the cypher. so normalize it to zero, shift it 13 spots with modulus wrapping, shift it back to place
      let nextChar = ((thisChar - 65 + 13) % 26) + 65;
      console.log("the replacement is: " + nextChar + " as a char: " + String.fromCharCode(nextChar) )

      cyphered[i] = String.fromCharCode(nextChar);
      console.log(cyphered[i] + " should be this")
    }
    //lowercase
    else if (thisChar >= 97 && thisChar <= 122){
      let nextChar = ((thisChar - 97 + 13) % 26) + 97;
      console.log("the replacement is: " + nextChar + " as a char: " + String.fromCharCode(nextChar) )
      cyphered[i] = String.fromCharCode(nextChar);
    }
  }
  return cyphered.join('')
}
