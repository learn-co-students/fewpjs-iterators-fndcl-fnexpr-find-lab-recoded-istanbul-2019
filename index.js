const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  const a = arr.find(x => x.result === "W");
  if (a) {
    return a.year;
  } else {
    return undefined;
  }
  // return arr.find(x => x.result === "W").year;
}
