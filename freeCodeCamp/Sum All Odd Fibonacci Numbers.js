/*
Sum All Odd Fibonacci Numbers
- Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
- The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
- For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
- sumFibs(75024) should return 60696.
- sumFibs(75025) should return 135721.
*/

//my solution: this is the very first version of my answer, although it works, it seems very weird and redundant.
function sumFibs(num) {
  let result;
  if(num==1|num==2){
    result=num;
  }else{
  let fibonacci = [1,1];
  let push;
  while(fibonacci[fibonacci.length-1]<=num){
    push = fibonacci[fibonacci.length-2]+fibonacci[fibonacci.length-1];
    if (push<=num){
      fibonacci.push(push);
    }
  }
  let odd = fibonacci.filter(x=>x%2>0);
  result=odd.reduce((acc,cur)=>acc+cur);
  }
  return result;
}

//fcc solution
//basic
function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }

        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return result;
}

//intermediate
function sumFibs(num) {
    // Perform checks for the validity of the input
    if (num < 0) return -1;
    if (num === 0 || num === 1) return 1;

    // Create an array of fib numbers till num
    const arrFib = [1, 1];
    let nextFib = 0;
    
    // We put the new Fibonacci numbers to the front so we
    // don't need to calculate the length of the array on each
    // iteration
    while((nextFib = arrFib[0] + arrFib[1]) <= num) {
        arrFib.unshift(nextFib);
    }

    // Sum only the odd numbers and return the value
    return arrFib.reduce((acc, curr) => {
        return acc + curr * (curr % 2);
    });
}
