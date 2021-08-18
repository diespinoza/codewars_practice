//Given a string, replace each character with its postion in the alphabet. Ignore anything that isn't a letter
function alphabetPosition(text) {
  //Convert the string to upper case. Split the string into array of characters
  //Use map to check if the character is a letter and return its place in the alphabet
  let holder = text.toUpperCase().split("").map(checkIsLetter);
  //Filter out the empty spots in the array which are any characters that weren't letters.
  //Join the array into one string separated by spaces.
  text = holder.filter((letter) => {return letter != null}).join(" ");
  return text;
}

//Helper function that takes in a single character, finds its unicode value, then checks if that unicode value
//corresponds with a letter in the alphabet. Then returns the position of that character in the alphabet
function checkIsLetter(oneletter){
  let charCode = oneletter.charCodeAt();
  if ( charCode < 65 || charCode > 90) {
    //not a letter. Ignore and do not return.
    return ;
  } else {
    return charCode - 64;
  }
}
