
function superbowlWin(array){
  
   const result = array.find(function(e){
     return  e.result ==="W"; 
     });
     
   if(result){
     return result.year;
   }
}

