/*
Where do I Belong
- Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
The returned value should be a number.
- getIndexToIns([10, 20, 30, 40, 50], 30)
- getIndexToIns([2, 5, 10], 15)
- getIndexToIns([], 1) should return 0.
*/

// my solution
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  //sort array
  arr = arr.sort((a, b) =>a - b);
  // find value that is >= num
  let fit = arr.filter(x=>x>=num);
  //return if the index of (first element in fit) in array is >=0
  return (arr.indexOf(fit[0])>=0)?arr.indexOf(fit[0])
  //else if the num is > last element in array, return array length, else return 0
  :(num>arr[arr.length-1])? arr.length : 0;
}

//fcc solution
//basic
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num)
      return a;
  }

  return arr.length;
}

//intermediate
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b){return a-b});
  return arr.indexOf(num);
}

//advance
function getIndexToIns(arr, num) {
return arr.concat(num).sort((a,b) => a-b).indexOf(num);
}
