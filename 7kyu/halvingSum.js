//given a number 'n', calculate the sum by halving the number until it reaches 1
function halvingSum(n) {
  let sum = n;
  while(n > 1){
    n = Math.floor(n/2);
    sum +=n;
  }
  return sum;
}



