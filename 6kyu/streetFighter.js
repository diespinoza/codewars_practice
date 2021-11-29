/* streetFighter.js
 * description: simulate a videogame character selection screen where the
 *      cursor can wrap horizontally but not vertically
 * arguments: A grid of fighters 2 rows by 6 cols. A starting position, the
 *    input moves
 * returns: a array of fighter names after ever move of the cursor
 */
function streetFighterSelection(fighters, position, moves){
  //first fighter is the at the starting position
  let results = [];
  //loop through all the moves
  for(let i = 0; i < moves.length; i++){
    //edit the position with based in the direction
    switch (moves[i]){
        case 'left':
        position[1]--;
        break;

        case 'right':
        position[1]++;
        break;

        case 'up':
        position[0]--;
        break;

        case 'down':
        position[0]++;
        break;
    }
    //correct any positions that need to wrap around
    //position[0] is the row
    if(position[0] < 0) {
      position[0]++;
    } else if (position[0] > 1){
      position[0]--;
    }
  //position[1] is the col
    if(position[1] < 0) {
      position[1] = 5;
    } else if (position[1] > 5){
      position[1] = 0;
    }
    //Add the fighter to the list
    results.push(fighters[position[0]][position[1]]);
  }
  return results;
}
