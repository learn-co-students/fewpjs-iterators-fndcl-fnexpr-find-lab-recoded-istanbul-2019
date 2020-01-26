const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(x){
  const result = x.find(function(y){
    return y["result"] === "W"
  })
  if (result){
    return result.year
  }
}