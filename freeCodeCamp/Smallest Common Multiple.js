/*
Smallest Common Multiple
- Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.
- The range will be an array of two numbers that will not necessarily be in numerical order.
- For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is 
also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
- smallestCommons([23, 18]) should return 6056820.
- smallestCommons([5, 1]) should return 60.
*/

// my solution: failed on case smallestCommons([23, 18]) should return 6056820.
// I know it has to do with HCF and LCM but couldn't figure out how
function smallestCommons(arr) {
//find the bigger(max) and smaller(min) number in arr
arr = arr.sort((a,b)=>a-b);
let min = arr[0];
let max = arr[1];
//find the prime number within min and max
let primes = getPrimes(max);
//find the highest multiplier of each prime number within min and max
let multipliers=[],highest,index,base,exponent;
for(index=0;index<primes.length;index++){
  base = primes[index];
  exponent=1;
  while(Math.pow(base,exponent)<=max){
    highest = Math.pow(base,exponent);
    exponent++;
  }
  multipliers.push(highest);
}
//multiply all the highest multiplier
let result = multipliers.reduce((acc,cur)=>acc*cur);
 return result;
}

function getPrimes(max){
  let num,multiple,sieve=[],primes=[];
  for(num=2;num<=max;num++){
    if(!sieve[num]){
      primes.push(num);
      for(multiple=num<<1;multiple<=max;multiple+=num){
        sieve[multiple]=true;
      } 
    }
  }
  return primes;
}

//fcc solution
//basic
function smallestCommons(arr) {
  // Sort array from greater to lowest
  // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
  arr.sort(function(a, b) {
    return b - a;
  });

  // Create new array and add all values from greater to smaller from the
  // original array.
  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  // Variables needed declared outside the loops.
  var quot = 0;
  var loop = 1;
  var n;

  // Run code while n is not the same as the array length.
  do {
    quot = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }

    loop++;
  } while (n !== newArr.length);

  return quot;
}

/*walkthrough
arr=[5,1]
newArr=[5,4,3,2,1]
  loop=1: quot =5*1*4 =20
    n=2: 20%2 == 0
    n=3: 20%3 !==0, break
  loop=2: quot =40
    n=2: 40%2 == 0
    n=3: 40%3 !==0, break
  loop=3: quot =60
    n=2, n=3, n=4 n=5 passed
    n==newArr.length
    return quot(60)
*/

//intermediate
function smallestCommons(arr) {
    var range = [];
    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
    }

    // can use reduce() in place of this block
    var lcm = range[0];
    for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
    }
    return lcm;

    function gcd(x, y) {    // Implements the Euclidean Algorithm
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }
}

//advance
function smallestCommons(arr) {

  // range
  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);

  let smallestCommon = lcm(min, min + 1);

  while(min < max) {
    min++;
    smallestCommon = lcm(smallestCommon, min);
  }

  return smallestCommon;
}

/**
 * Calculates Greatest Common Divisor
 * of two nubers using Euclidean algorithm
 * https://en.wikipedia.org/wiki/Euclidean_algorithm
 */
function gcd(a, b) {
  while (b > 0) {
    let tmp = a;
    a = b;
    b = tmp % b;
  }
  return a;
}

/**
 * Calculates Least Common Multiple
 * for two numbers utilising GCD
 */
function lcm(a, b) {
  return (a * b / gcd(a, b));
}
