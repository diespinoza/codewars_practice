//This code returns true if the first argument string ends with the 2nd argument string
//In hindsight, you can use a string method called endsWith()
function solution(str, ending){
  //Use the length of the 'ending' to know what to compare
  let holder = str.substr(-1 * ending.length)
  if(holder === ending || ending.length === 0){
    return true;
  }
  else {
    return false;
  }
}
