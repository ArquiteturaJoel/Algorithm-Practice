/*
Sorted Union
- Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
- In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
- The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
- uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
- uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
*/

//my solution
function uniteUnique(...theArgs) {
  //for each element in each array, push to result if haven't exist
  let result=[];
  theArgs.map((x)=>(
    x
    .map(function(y){
      if(result.indexOf(y)<0){
        result.push(y);
      }
    })
    ))
  return result;
}

//fcc solution
//basic
function uniteUnique(arr1, arr2, arr3) {
  // Creates an empty array to store our final result.
  var finalArray = [];

  // Loop through the arguments object to truly made the program work with two or more arrays
  // instead of 3.
  for (var i = 0; i < arguments.length; i++) {
    var arrayArguments = arguments[i];

    // Loops through the array at hand
    for (var j = 0; j < arrayArguments.length; j++) {
      var indexValue = arrayArguments[j];

      // Checks if the value is already on the final array.
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }

  return finalArray;
}

//2
function uniteUnique(arr) {
  var args = [...arguments];
  var result = [];
  for(var i = 0; i < args.length; i++) {
    for(var j = 0; j < args[i].length; j++) {
       if(!result.includes(args[i][j])) {
        result.push(args[i][j]);
      }
    }
  }
  return result;
}

//intermediate
function uniteUnique(arr1, arr2, arr3) {
 var newArr;
 //Convert the arguments object into an array
  var args = Array.prototype.slice.call(arguments);
  //Use reduce function to flatten the array
  newArr = args.reduce(function(arrA,arrB){
  //Apply filter to remove the duplicate elements in the array
    return arrA.concat(arrB.filter(function(i){
      return arrA.indexOf(i) === -1;
    }));
  });

   return newArr;                    
}

//advance
function uniteUnique() {
  var concatArr = [];
  var i = 0;
  while (arguments[i]){
    concatArr = concatArr.concat(arguments[i]); i++;
  }
  uniqueArray = concatArr.filter(function(item, pos) {
    return concatArr.indexOf(item) == pos;
  });
  return uniqueArray;
}

//2
//jshint esversion:6

function uniteUnique(...arrays) {

  //make an array out of the given arrays and flatten it (using the spread operator)
  const flatArray = [].concat(...arrays);

  // create a Set which clears any duplicates since it's a regulat set and not a multiset
  return [...new Set(flatArray)];
}
