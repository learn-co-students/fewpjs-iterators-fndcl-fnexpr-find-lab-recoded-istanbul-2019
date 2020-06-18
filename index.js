const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
    { year: "2018", result: "L" },
    { year: "2017", result: "W" },
    { year: "2016", result: "N/A" }
    //...
]

function superbowlWin(s) {
    let found = s.find(elem => elem.result === "W")
    return !!found? found.year:undefined;
}