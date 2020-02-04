const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(params) {
  let result = params.find(
    function(arg) {
    return arg.result === "W";
    }
  );
  
  if (result) {
    return result.year;
  }
}