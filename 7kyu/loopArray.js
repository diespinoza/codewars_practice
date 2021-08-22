function loopArr(arr, direction, steps) {
//If direction is 'left', remove from the front and add to the tail (shift then push)
//if direction is 'right', remove from the tail and add to the front(pop then unshift)
 if (direction === "left"){
   //shift then push the array, 'steps' amount of times
   for(let i=0; i<steps; i++){
     let firstElement = arr.shift();
     arr.push(firstElement);
   }
 } else if (direction === "right"){
   //pop then unshift the array, 'steps' amount of times
   for(let i=0; i<steps; i++){
     let lastElement = arr.pop();
     arr.unshift(lastElement);
   }

 } else {
   //'direction' is not unexpected value. return nothing
   return ;
 }
  return arr;

}
