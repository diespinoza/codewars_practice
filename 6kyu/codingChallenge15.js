/* codingChallenge 15
 *  Given a string, return an array of string where each string is rotated
 *  one character over from the previous.
 *
 */
function rotate(str){
  let result = [];
  let rot = str.split('');
  for(let i = 0; i < str.length; i++){
    rot.push(rot.shift());
    result.push(rot.join(''));
  }
  return result
}
