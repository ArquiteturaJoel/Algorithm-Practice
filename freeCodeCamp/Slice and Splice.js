/*
Slice and Splice
- Use the array methods slice and splice to copy each element of the first array into the second array, in order.
- Begin inserting elements at index n of the second array.
- Return the resulting array. The input arrays should remain the same after the function runs.
- frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
*/

//my solution
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  //get a copy of arr2
  let result = arr2.slice();
  // insert every item of arr1 in index n of arr2
  for(let i= arr1.length-1;i>=0;i--){
    result.splice(n,0,arr1[i]);
  }
  return result;
}

//fcc solution
//basic
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}
