/* howManyYears
 * the date format is YYY/MM/DD. find the difference in years between the two
 *  dates
 *  arguments: two date strings
 *  returns: a single integer for the date
 */
var howManyYears = function(date1, date2){
  return Math.abs(date1.slice(0,4) - date2.slice(0,4));
}
