//Given the array 'signature', return the first 'n' elements of a tribbonachi sequence
//brute force solution:
function tribonacci(signature,n){
if(signature.length === 0 || n == 0) {
  return [];
}
if(n < 3){
  return signature.slice(0,n);
}

  for(let i=0; i<n-3; i++){
    let triSum = signature[i] + signature[i+1] + signature[i+2];
    signature.push(triSum);
  }
  return signature
}
