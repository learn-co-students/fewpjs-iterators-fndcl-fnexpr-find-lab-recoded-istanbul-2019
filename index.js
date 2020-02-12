const testVar = {}

function testFunc() {
  return "hi"
}

superbowlWin = (record) => {
    let result= record.find( e => e.result === "W")
    return result?result.year:undefined;
}
