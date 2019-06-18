/*
Sum All Numbers in a Range
- We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
- The lowest number will not always come first.
- sumAll([1, 4]) should return 10.
*/

//my solution
function sumAll(arr) {
  // find the lowest and the highest and store them
  let highest = arr.reduce((x,y)=>(x>y)?x:y);
  let lowest = arr.reduce((x,y)=>(x<y)?x:y);
  //add all numbers between lowest and highest(included) up
  let sum=0;
  for(let i = highest; i >= lowest;i--){
    sum += i;
  }
  return sum;
}

//fcc solution
//basic
function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;
    for (var i=min; i <= max; i++){
        temp += i;
    }
  return(temp);
}

//intermediate
function sumAll(arr) {
  // Buckle up everything to one!

  // Using ES6 arrow function (one-liner)
  var sortedArr = arr.sort((a,b) => a-b);
  var firstNum = arr[0];
  var lastNum = arr[1];
  // Using Arithmetic Progression summing formula

  var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
  return sum;
}

//advance
function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }
  return sum;
}
