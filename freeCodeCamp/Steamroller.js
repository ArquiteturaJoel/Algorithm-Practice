/*
Steamroller
- Flatten a nested array. You must account for varying levels of nesting.
- steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
*/

//my soulution
function steamrollArray(arr) {
  // I'm a steamroller, baby
  while(arr.some(x=>x.constructor==Array)){
    arr = arr.reduce((acc,cur)=>acc.concat(cur),[]);
  }
  return arr;
}

//fcc solution
//basic
function steamrollArray(arr) {
  var flattenedArray = [];

  // Create function that adds an element if it is not an array.
  // If it is an array, then loops through it and uses recursion on that array.
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };

  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;
}

//intermediate
function steamrollArray(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

//advance
function steamrollArray(arr) {
  return arr.toString()
    .replace(',,', ',')       // "1,2,,3" => "1,2,3"
    .split(',')               // ['1','2','3']
    .map(function(v) {
      if (v == '[object Object]') { // bring back empty objects
        return {};
      } else if (isNaN(v)) {        // if not a number (string)
        return v;
      } else {
        return parseInt(v);         // if a number in a string, convert it
      }
    });
}
