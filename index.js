const testVar = {}

function testFunc() {
  return "hi"
}
const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"} ]
function superbowlWin(record)
{
  let res=record.find(function(rec){return (rec.result == "W")});
  if(res!==undefined)
  {
    console.log(res.year);
    return res.year;
    
  }
    return undefined;
}
