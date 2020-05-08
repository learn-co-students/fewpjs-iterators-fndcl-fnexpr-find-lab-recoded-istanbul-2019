const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

function superbowlWin(array) {
const myObject = array.find(object => { 
  return object.result === "W"
})

if (myObject) {
  return myObject.year
}
}
