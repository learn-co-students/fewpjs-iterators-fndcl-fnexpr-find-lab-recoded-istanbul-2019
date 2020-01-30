const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(arr){
  let win = arr.find(function(e){return e.result=='W'})
  if(win)return win.year
}