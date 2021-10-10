/* capitalizeWord
    Given an input string, capitalize the first letter of the string and return the whole string
    arguments: a string. Will it always be alphabetic characters?
    returns: a string
*/
function capitalizeWord(word) {
  return word.replace(/\b./ ,word[0].toUpperCase() )
}

