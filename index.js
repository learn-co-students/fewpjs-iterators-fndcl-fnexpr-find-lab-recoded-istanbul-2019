// const testVar = {}

// function testFunc() {
//   return "hi"
// }

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

function superbowlWin(array) {
  let wObject = array.find( arrObject => {
    return arrObject["result"] === "W";
  });
  return wObject["year"];
};