const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}]
  //...
function isWinner (obj){
  return obj.result==="W";
}
function superbowlWin (record){
  if(record.find(isWinner)){
    let s=record.find(isWinner);
return s.year;
}
else return undefined;

superbowlWin(record)
}