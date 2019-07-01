/*
Drop it
- Given the array arr, iterate through and remove each element starting from the first element (the 0 index) 
until the function func returns true when the iterated element is passed through it.
- Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
- dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1]
*/

//my solution
function dropElements(arr, func) {
  // Drop them elements.
  let index = arr.map(x=>func(x)).indexOf(true);
  return (index<0)? []: arr.slice(index);
}

//fcc solution
//basic
function dropElements(arr, func) {
  // drop them elements.
  var times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

//intermediate
function dropElements(arr, func) {
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func): arr.length, arr.length);
}

//advance
function dropElements(arr, func) {
  while(arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}
