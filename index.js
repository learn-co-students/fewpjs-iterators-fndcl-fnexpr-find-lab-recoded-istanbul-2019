
const testVar = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
   
  ]

function testFunc(object) {
    if(object.result==="W"){
        return object;
    }
    else{
        return undefined;
    }
  
}

function superbowlWin(testVar){
    if(testVar.find(testFunc)===undefined){
        return undefined;
    }
    else{
       return testVar.find(testFunc).year;
    }
}
