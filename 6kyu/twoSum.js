function twoSum(numbers, target) {
  let result = []
  //Subtract every number from the target then find the index of the number equal to the result
  numbers.forEach((num1, i)=>{
    let j = numbers.findIndex(num2 => {
      return (target - num1) === num2
    })
    //make sure findIndex returned a valid index
    if(j > -1 && j != i){
      result = [i,j]
    }
  })
  return result
  }
