function getSum( a,b ){
  //sort a and b
  let nums = [a,b].sort(function(c,d){return c-d});
  let sum = nums[0];
  if(a === b){
    return a
  }
  else{
    for(let i = nums[0]+1; i <= nums[1]; i++){
      sum = sum + i
    }
    return sum
  }
}
