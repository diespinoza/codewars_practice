/* lastSurvivor
 parameters: Remove the letter at the indice selected by the first number in the array.
             Do this one step at a time
 arguments: a string of letters and an array of numbers
 returns: the remaining letter
*/
function lastSurvivor(letters, coords) {
  letters = letters.split('')
  coords.forEach(curr => letters.splice(curr,1))
  return letters.join('')
}
