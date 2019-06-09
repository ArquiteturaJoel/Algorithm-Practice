/*
Finders Keepers
- Create a function that looks through an array (first argument) and 
returns the first element in the array that passes a truth test (second argument). 
If no element passes the test, return undefined.
- findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
- findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.
*/

//my solution
function findElement(arr, func) {
  //loop through arr, apply func
  let result = arr.filter(func);
  // return the first true or undefined
  return (result)? result[0]:"undefined";
}

//fcc solution
//basic
function findElement(arr, func) {
  let num = 0;
  
  for(var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  
  return undefined;
}
