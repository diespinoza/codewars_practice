/* solution
  Given two string, return then in the form of short + long + short
  Arguments: two strings of different lengths. may be empty
  Returns: A string with the two words combined
*/
function solution(a, b){
  let word1len = a.length
  let word2len = b.length
  if(word1len > word2len){
    return b + a + b;
  } else if(word2len > word1len){
    return a + b + a;
  }
}

