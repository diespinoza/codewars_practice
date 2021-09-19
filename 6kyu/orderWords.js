/* order
  parameters: sort the words in numerical order according to their contained number
  arguments: a string of words, each containing a single number from 1 to 9
  returns: a string of words, but odered
*/
function order(words){
  //Split the string into an array of strings
  let result = words.split(" ")
  //Sort the string according to a custom function
  result = result.sort( (a, b) => {
    let num1 = a.match(/[1-9]/);
    let num2 = b.match(/[1-9]/);
    return num1 - num2
  })
  //Join the array back into a single string a return
  return result.join(" ")
}
