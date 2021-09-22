/*longetsPalindrome
  parameters: Find the length of the longest substring that forms a palindrome
  arguments: a string of characters and words
  returns: the length of the longest palindrome in the input
*/
longestPalindrome=function(s){
  //Lowercase the string and remove any characters that aren't letters or numbers
  let regex = /[^\w\d_]/g
  let words = s.toLowerCase().replace(regex,'')
  //Split and resverse the string
  let reversew = words.split('').reverse().join('')
  //Extract all of the substrings in words.
  let i, j, longest = 0
  let revLen = reversew.length
  //To for loops to extract every substring from words
  for(i = 0; i < words.length; i++){
    for(j = i + 1; j < words.length + 1; j++){
      let substr = words.slice(i,j)
      //For every substring, see if the reverse contains that string.
      //slice the reversew string at the flipped position
      if(reversew.slice(revLen - j, revLen - i) === substr){
        if(substr.length > longest){
          longest = substr.length
        }
      }
    }
  }
  return longest
}
