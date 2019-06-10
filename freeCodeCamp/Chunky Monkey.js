/*
Chunky Monkey
- Write a function that splits an array (first argument) into groups the length of size (second argument) 
and returns them as a two-dimensional array.
- chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
- chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
*/

//my solution: similar to advance solution!
function chunkArrayInGroups(arr, size) {
  // Break it up.
  let result=[];
  //splice array and push it to result
  while(arr.length>0){
    result.push(arr.splice(0,size));
  }
  return result;
}

//fcc solution
//basic
function chunkArrayInGroups(arr, size) {

  var temp = [];
  var result = [];

  for (var a = 0; a < arr.length; a++) {
    if (a % size !== size - 1)
      temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0)
    result.push(temp);
  return result;
}

//intermediate
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arr2 = [];
  for (var i = 0; i < arr.length; i+=size) {
  arr2.push(arr.slice(i , i+size));
  }
  return arr2;
}

//advance
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];
  var i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i+size));
    i += size;
  }
  return newArr;
}

// another
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0,size));
  }
  return newArr;
}
    
