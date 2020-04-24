const testVar = [
  {year: "2018", result:"W"},
  {year: "2017", result:"L"},
  {year: "2016", result:"N/A"}
];
function superbowlWin(Arr) {
let win = Arr.find(function(s) {return s.result==='W' });
if(win){
  return win.year;
}else{
  return undefined;
}
}
