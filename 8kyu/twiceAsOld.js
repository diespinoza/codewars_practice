//Calculate how many years ago(or in the future) the father was twice as old as the son.
function twiceAsOld(dadYearsOld, sonYearsOld) {
  //find out if the father's age more than twice the sons
  if(Math.floor(dadYearsOld / sonYearsOld) >= 2){
    //Calculate how many years ago
    return dadYearsOld - (2 * sonYearsOld);
  }
  //Calculate how many years in the future
  else {
    return (2 * sonYearsOld) - dadYearsOld;
  }
}
