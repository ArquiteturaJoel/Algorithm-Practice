/*
Repeat a String Repeat a String
- Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
- repeatStringNumTimes("*", 8) should return "********".
- repeatStringNumTimes("abc", -2) should return "".
*/

//my solution
function repeatStringNumTimes(str, num) {
  // repeat after me
  if(num<0){
    return "";
  }else{
    let result = [];
    while(num>=1){
      result.push(str);
      num--;
    }
    return result.join("");
  }
}

//fcc solution
//basic 
function repeatStringNumTimes(str, num) {
  var accumulatedStr = '';

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}

//intermediate
function repeatStringNumTimes(str, num) {
  if(num < 0)
    return "";
  if(num === 1)
    return str;
  else
    return str + repeatStringNumTimes(str, num - 1);
}


//advance
function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : '';
}
