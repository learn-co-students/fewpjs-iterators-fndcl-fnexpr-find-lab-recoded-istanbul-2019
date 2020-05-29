const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  let winningTeam= array.find(function(team){
    return team.result === "W"
  })

  if(winningTeam){
    return winningTeam.year
  }
}





// function superbowlWin(array){
//   let test= array.find(function(something){
//     return something.result === "W";
//   });
//   if(test){
//     return test.year;
//   }
  
// }