const testVar = {}

function testFunc() {
  return "hi"
}
// function superbowlWin(array){
// array.find(function anything(){
// if(Object.result ==='W'){
//   return Object.year;
// }
// else{
//   return undefined;
// }
// });
// }
// function record (){
  // record.find(function superbowlWin(s){
  //   if (Object.result =="W"){
  //     return s ==="W";
  //     return Object.year;
  //   }
  //   });
// // }
// function superbowlWin(s) { 
//   return s.result === 'W';
// }
// record.find(superbowlWin);

// find(function superbowlWin(array) { 
//   return array.result === 'W';
//   // return s.find(superbowlWin);
//   return Object.year;
// });

// Array.find(function(s){
//   return s.result ==='W';

// })

// function isW(s){
//   return s.result==='W';
//   return s.year;

// }
// record.find(isW);

function superbowlWin(array){
  let test= array.find(function(something){
    return something.result === "W";
  });
  if(test){
    return test.year;
  }
  
}