const record = [
  { year: "2018", result: "L" },
  { year: "2017", result: "W" },
  { year: "2016", result: "N/A" }
  //...
]
function superbowlWin(input) {
  let year = input.find(function (r) { return r.result === "W" })
  console.log(year)
  if (year) {
    // console.log(year.year)
    return year.year
  }
  else {
    console.log("hi")
    return undefined
  }
}
superbowlWin(record)
