/* lovefunc
   parameters: Take the number of petals in each flower and if one is even and the other odd, then they are in love
   arguments: two numbers representing flowers
   returns: true if in love and false if not
  */
function lovefunc(flower1, flower2){
  // moment of truth
  //use modulus to find out if the number is even or odd. If it divides evenly into 2
  if ((flower1 % 2 === 0 && flower2 % 2 != 0) ||
      (flower1 % 2 != 0 && flower2 % 2 === 0) ){
    return true
  }
  else {
    return false
  }
}
