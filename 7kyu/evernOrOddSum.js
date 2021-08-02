/* evenOrOdd
 * given a string integer, find the sum of the even digits and the odd digits
 * arguments: a string integer
 * returns: which sum is greater
 */
function evenOrOdd(str) {
  str = str.split('')
  let sumEven = 0;
  let sumOdd = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i] % 2 === 0){
      sumEven += Number(str[i])
    } else {
      sumOdd += Number(str[i])
    }
  }
  //Check the sums
  if(sumEven === sumOdd){
    return "Even and Odd are the same"
  }
  else if(sumEven > sumOdd){
    return "Even is greater than Odd"
  } else {
    return "Odd is greater than Even"
  }
}
