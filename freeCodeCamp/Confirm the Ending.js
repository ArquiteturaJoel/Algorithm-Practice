/*Confirm the Ending
- confirmEnding("Open sesame", "same") should return true.
- confirmEnding("Open sesame", "pen") should return false. 
*/

//my solution
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return (str.split("")
        .splice(str.length-(target.length),str.length)
        .join("") 
        == target)
}

//fcc solution
//intermediate
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str.slice(str.length - target.length) === target;
}
