/* isValidWalk
  explanation: Given an array of cardinal directions for a walk down blocks that take 1 minutes to traverse
    find out if the walk will be 10 minutes and return you to the start location.
  arguments: a array of one letter strings representing a direction
  returns: true if the walk is 10 minutes and takes you back to where you started. false otherwise
*/
function isValidWalk(walk) {
  let N_S = 0;
  let E_W = 0;
  for(let i = 0; i < walk.length; i++){
    switch(walk[i]){
        case 'n': N_S++; break;
        case 's': N_S--; break;
        case 'e': E_W++; break;
        case 'w': E_W--; break;
    }
  }
  //Check if the directions cancel out and the walk is 10 blocks
  if(N_S == 0 && E_W == 0 && walk.length == 10){
    return true;
  } else {
    return false;
  }
}
