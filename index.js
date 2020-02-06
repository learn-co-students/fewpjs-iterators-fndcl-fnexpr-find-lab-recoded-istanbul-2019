const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr){
    const res =  arr.find(function(element){return element["result"] === "W" });
    console.log(res)
    return res != undefined ? res["year"] : res;
}
