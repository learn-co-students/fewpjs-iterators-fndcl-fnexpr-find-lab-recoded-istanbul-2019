const testVar = {};

function testFunc() {
  return "hi";
}

function superbowlWin(arr) {
  const res = arr.find(({ result }) => result === "W");
  if (res === undefined) {
    return res;
  } else {
    return res["year"];
  }
}
