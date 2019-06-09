/*
Return Largest Numbers in Arrays
- largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) should return [25, 48, 21, -3].
*/

//my solution: similar to fcc basic solution
function largestOfFour(arr) {
  // You can do this!
  let result=[];
  for(let i in arr){
    let largest = arr[i][0];
    for(let j = 1; j<arr[i].length;j++){
      if(arr[i][j]>largest){
        largest=arr[i][j]; 
      }
    }
    result.push(largest);
  }
  return result;
}



//fcc solution
//basic
function largestOfFour(arr) {
  var results = [];
  for (var n = 0; n < arr.length; n++) {
    var largestNumber = arr[n][0];
    for (var sb = 1; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }

    results[n] = largestNumber;
  }

  return results;
}

//intermediate
function largestOfFour(arr) {
  return arr.map(function(group){
    return group.reduce(function(prev, current) {
      return (current > prev) ? current : prev;
    });
  });
}

//advance
function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}
