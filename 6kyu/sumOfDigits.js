function digital_root(n) {
  while(n > 9){
    n = n.toString().split('').reduce((sum, curr) => {return sum + Number(curr)},0)
  }
  return n
}
