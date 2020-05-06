const testVar = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}

]
function superbowlWin(testArr) {
  const isWin = testArr.find(function(s) {
    return s.result === "W"
  })
  if(isWin) {
    return isWin.year
  }else {
    return undefined
  }

}
