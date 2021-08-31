//return the total number of smiling faces in the array
function countSmileys(arr) {
  //Search for the smileys using regular expressions
  const regex = (/(:|;)(-|~)?(\u0029|D)/g);
  let result = arr.toString().match(regex);

  //Check if result is valid
  return (result == null) ? 0 : result.length;
}
