//Reverse a string without built in array methods
function solution(str){
  let result = ""
  for(let i = 0; i < str.length; i++){
    result = str[i] + result
  }
  return result
}
