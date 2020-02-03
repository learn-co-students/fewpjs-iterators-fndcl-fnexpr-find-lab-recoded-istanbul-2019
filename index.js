const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  let obj =  array.find(e=>e.result==="W")
  if (obj) return obj.year
}