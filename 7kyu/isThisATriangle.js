/* isTriangle
 * Given three sides of a polygon, determine if it can make a triangle
 * Uses the triangle inequality theorem
 */
function isTriangle(a,b,c){
  if((a < b + c) && (b < a + c) && (c < a + b)) return true
  else  return false;
}
