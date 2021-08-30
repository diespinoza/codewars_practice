//Given a string of words separated by a space, return the length of the shortest word
function findShort(s){
  let shortest = 1000000000;
  let words = s.split(" ");
  for(let i=0 ; i<words.length ; i++){
    let current = words[i].length;
    if(current <= shortest){
      shortest = current;
    }
  }
  return shortest

}
