function twoHighest(arr) {
  let nums = arr.length;
  if(nums === 0) return [];
  if(nums === 1) return [arr[0]];
  let first = 0;
  let second = 0;
  for(let i = 0; i < nums; i++){
    if(arr[i] > first){
      second = first;
      first = arr[i];
    }
    else if(arr[i] > second && arr[i] < first){
      second = arr[i];
    }
  }
  return [first, second];
}
