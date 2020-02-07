const testVar = {}

function testFunc() {
  return "hi"
}


const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]


function superbowlWin (record) {
let winFound = record.find( ({result}) => result ==="W")
if (winFound){
  return winFound.year
}
else {
  return undefined
}
   
} 