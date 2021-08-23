//You are a square!
//Find if the input number is a perfect square
var isSquare = function(n){
  //check if th number is negative
  if(n < 0){
    return false;
  }
  else {
    //Find the floor of the square root. If the square of that result is equal to 'n'
    let root = Math.floor(Math.sqrt(n));
    return (n == root * root);
  }
}
