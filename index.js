const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(record){
  let ele = record.find(a  => a.result === "W");
  if (ele) return  ele.year
}
