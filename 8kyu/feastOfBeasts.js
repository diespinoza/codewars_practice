//8kyu codewards exercise
function feast(beast, dish) {
  //This function checks that the first and last character of 'beast' matches the first and last character of 'dish'
  let firstletter = beast.charAt(0);
  let lastletter = beast.charAt(beast.length-1)
  if(dish.startsWith(firstletter) && dish.endsWith(lastletter)){
    return true;
  } else {
    return false;
  }
}

