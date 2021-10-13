/* Given an array of integers, find the mean
 *
 */
#include <stddef.h>
int get_average(const int *marks, size_t count){
  int sum = 0;
  for(size_t i = 0; i < count; i++){
    sum = sum + marks[i];
  }
  return sum/count;
}
