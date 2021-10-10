/* tripleTrouble
  This function will return a string that combines the letters of all three input strings in groups.
  It groups the first letter of every input and continues for each letter.
  arguments: three string. will always be the same length.
  returns: a single string of the letters combined

*/
function tripleTrouble(one, two, three){
  let result = ""
  //extracting the characters from each string
  for(let i = 0; i < one.length; i++){
    // add them to a new string in order based on which string is first.
    let toAdd = one[i] + two[i] + three[i]
    result += toAdd
  }
  //return the final string
  return result
}


console.log(tripleTrouble("aa", "bb","cc"), "abcabc");

