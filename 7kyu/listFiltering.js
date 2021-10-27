// filter_list
// Filter out the strings from an input array
// Return the array but devoid of strings
function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter((curr)=>{return typeof curr === 'number'})
}
