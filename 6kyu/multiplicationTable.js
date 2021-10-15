/* multiplication table
 * Make a function that takes the row and col dimensions and returns a
 * multiplication table where each number is the result of multiplying
 * its row positions and its column position both starting at 1
 * arguments: two integers with the row and col dimensions
 * returns: an array of arrays with the rows of the multiplication table
 */
function multiplicationTable(row,col){
  let multable = [];
  for(let i = 0; i < row; i++){
    let current = [];
    for(let j = 0; j < col; j++){
      current[j] = (i+1) * (j+1);
    }
    multable.push(current);
  }
  return multable;
}
