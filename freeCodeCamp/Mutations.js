/*
Mutations
- Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
- For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
- The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
- Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

//my solution
function mutation(arr) {
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  //loops through arr[1]
  for(let i=0;i<arr[1].length;i++){
    if(arr[0].indexOf((arr[1][i]))==-1){
      return false;
    }
  }
return true;
}

//fcc solution
//basic
function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i=0;i<test.length;i++) {
    if (target.indexOf(test[i]) < 0)
      return false;
  }
  return true;
 }
 
 //intermediate
 function mutation(arr) {
  return arr[1].toLowerCase()
    .split('')
    .every(function(letter) {
      return arr[0].toLowerCase()
        .indexOf(letter) != -1;
    });
}
