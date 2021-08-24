/* likes
 * Find out who likes this and make a string out of it
 * arguments: a list of names
 * returns: a statement about who liked this
 */
function likes(names) {
  let len = names.length
  if(len === 0) {return 'no one likes this'}
  else if(len === 1){return names[0] + ' likes this'}
  else if(len === 2){return names[0] + ' and ' + names[1] + ' like this'}
  else if(len === 3){return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'}
  else if(len > 3){return names[0] + ', ' + names[1] + ' and ' + (len-2)  +' others like this'}
}
