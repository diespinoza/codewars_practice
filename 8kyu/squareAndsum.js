//squareSum
//Takes an array of numbers and return the sum of the squares of each number
function squareSum(numbers){
  let sum = 0;
  let numlength = numbers.length;
  for(let i=0; i<numlength ; i++){
    sum += numbers[i]*numbers[i];
  }
  return sum;
}
