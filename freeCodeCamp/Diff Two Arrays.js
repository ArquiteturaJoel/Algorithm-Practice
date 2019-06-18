/*
Diff Two Arrays
- Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.
- ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] 
should return ["pink wool"].
*/

//my solution
function diffArray(arr1, arr2) {
var newArr = [];
// Same, same; but different.

// loop through arr1 and push different
arr1.map(function(x){
  if(arr2.indexOf(x)<0){
    newArr.push(x);
  }
})
 // loop through arr2 and push different
arr2.map(function(x){
  if(arr1.indexOf(x)<0){
    newArr.push(x);
  }
})
return newArr;
}

//fcc solution
//basic
function diffArray(arr1, arr2) {
  var newArr = [];

  function onlyInFirst(first, second) {
  // Looping through an array to find elements that don't exist in another array
    for (var i=0;i<first.length;i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

//intermediate
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(
        item => !arr1.includes(item) || !arr2.includes(item)
    )
}

//advance
function diffArray(arr1, arr2) {
    return arr1
      .filter(el => !arr2.includes(el))
      .concat(
        arr2.filter(el => !arr1.includes(el))
      )
}

// 2
function diffArray(arr1, arr2) {
  return [
    ...diff(arr1, arr2),
    ...diff(arr2, arr1)
  ]
  
  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}
