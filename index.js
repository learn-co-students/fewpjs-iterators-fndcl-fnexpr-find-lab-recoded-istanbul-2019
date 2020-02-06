const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let item = arr.find((y, index) => y.result === 'W');
  if (item === undefined) return item;
  return item.year;
}

done();