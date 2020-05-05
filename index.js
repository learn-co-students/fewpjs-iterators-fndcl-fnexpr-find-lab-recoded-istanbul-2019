const testVar = {}

function testFunc() {
  return "hi"
}
// function superbowlWin(array) {
//   const result = array.find((e) => {
//     if (e.result === 'W') {
//       return e.year;
//     } else {
//       return undefined;
//     }
//   })
//   return result;
// };

// function superbowlWin(array) {
//   const obj =
//     array.find(e => {
//       if (e.result === 'W') {
//         return e.year;
//       } else {
//         return false
//       }
//     }
//     )
//   return obj.year;
//   console.log(obj);
// }


function superbowlWin(array) {
  const obj =
    array.find(e => (e.result === 'W' ? e.year : undefined));
  if (obj === undefined) {
    return undefined;
  } else {
    return obj.year;
  }

  console.log(obj);
} 