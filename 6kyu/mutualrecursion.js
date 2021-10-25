/* mutualrecursion.js
 * This is similar to recursion, except functions also call each other
 *  as well as themselves
 * Wanted to create two function based on the Hofstadter Female and Male
 *  sequences.
 *
 * arguments: a number n, it will always be greater than or equal to zero
 * returns: a number
 */

// Final solution, short version
function F(n) { return (n === 0) ? 1 : n - M(F(n-1)) }

function M(n) { return (n === 0) ? 0 : n - F(M(n-1)) }

//Longer, first solution. Both are the same.

function F(n) {
  if(n === 0) {return 1;}
  else {
    return n - M(F(n-1));
  }
}

function M(n) {
  if(n === 0){ return 0; }
  else {
    return n - F(M(n-1));
  }
}
