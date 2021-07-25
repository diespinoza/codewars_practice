//Write a function that giver a floor in the american system returns the floor in the european system
function getRealFloor(n) {
  if (n>=13){
    return n-2;
  }
  else if (n<=0){
    return n;
  }
  else {
    return n-1;
  }
}
