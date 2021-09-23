* oracle
 parameters: Playing rock paper scissors, but you only get to choose one item
    If that item has the most wins compared to the moves of the opponent, return it
  arguments: array of rock paper scissors plays
  returns: which item move will win the most
*/
function oracle(gestures){
  let rockWins, paperWins, scissorsWins = 0
  //For each move, find out how many times you win
  rockWins = gestures.reduce((total, curr)  =>{
    return total += Number(checkWin("rock",curr))
  }, 0)//the reduce method requires an initial value!
  paperWins = gestures.reduce((total, curr)  =>{
    return total += Number(checkWin("paper",curr))
  }, 0)
  scissorsWins = gestures.reduce((total, curr)  =>{
    return total += Number(checkWin("scissors",curr))
  }, 0)

  //Find out which move had the most wins and return the answer
  if(rockWins > 0 ){
    if(paperWins > 0){return "rock/paper"}
    else if (scissorsWins > 0){return "rock/scissors"}
    else if (paperWins > 0 && scissorsWins > 0){return "rock/paper/scissors"}
    else {return "rock"}
  } else if(paperWins > 0){
    if (scissorsWins > 0){return "paper/scissors"}
    else {return "paper"}
  } else if (scissorsWins > 0) {return "scissors"}
  else if (rockWins === paperWins && rockWins == scissorsWins && rockWins == 0) {return "tie"}
}


function checkWin(choice, play){
  if((choice === "rock" && play === "scissors") ||
     (choice === "scissors" && play === "paper") ||
     (choice === "paper" && play ===  "rock")){
    return 1
  } else if (choice === play){
    return 0
  } else {
    return -1
  }
}
