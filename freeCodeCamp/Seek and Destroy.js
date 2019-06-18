/*
Seek and Destroy
- You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.
- destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
*/

//my solution: similar to fcc intermediate solution
function destroyer(arr) {
  // Remove all the values
  //convert argument into array-like object and remove the first element
  let target = Array.from(arguments).splice(1)
  //loop through arr and filter out if element exist in target
  arr = arr.filter((x)=>!target.includes(x));
  return arr;
}

//fcc solution
//basic
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}

//intermediate
function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}

//advance
const destroyer = (arr, ...args) => arr.filter(i => !args.includes(i));
