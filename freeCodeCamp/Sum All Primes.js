/*
Sum All Primes
- Sum all the prime numbers up to and including the provided number.
- A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
- The provided number may not be a prime.
- sumPrimes(10) should return 17.
*/

//my understanding solution based on StackOverFlow
function sumPrimes(num) {
  let result = getPrimes(num).reduce((acc,cur)=>acc+cur);
  return result;
}

function getPrimes(max) {
  var sieve = [], i, j, primes = [];
  //from 2 to n
  for (i = 2; i <= max; ++i) {
      if (!sieve[i]) {
          // i has not been marked -- it is prime
          primes.push(i);
          for (j = i << 1; j <= max; j += i) {
            //mark multiplier of i to true, so that it will be sieve.
              sieve[j] = true;
          }
      }
  }
  return primes;
}
/*
<< is a bitwise left shift, exp: 9 << 3 translates to: 9 * (2 ** 3) = 9 * (8) = 72.
What getPrimes() does:
- i=2
  - sieve[2] is not true, enter loop
    - primes = [2]
    - j = 2<<1 = 2 * (2^1) = 2*2 = 4
      - j=4<10: sieve[4]=true
      - j=4+2=6<10: sieve[6]=true
      - j=6+2=8<10: sieve[8]=true
      - j=8+2=10=10,loop ends,primes = [2], sieve = [,,,,true,,true,,true]
- i=3
  - sieve[3] is not true, enter loop
    - primes = [2,3]
    - j = 3<<1 = 3*2 = 6
      - j=6<10: sieve[6]= true
      - j=8 and then 10, loop ends, primes = [2,3], sieve = [,,,,true,,true,,true]
- i=4
  - sieve[4] is true, skip loop
- i=5
  - sieve[5] is not true, enter loop
    - primes = [2,3,5]
    - j = 5<<1 = 5*2 = 10, 10 is not < 10
- so on and so forth.
- primes collect prime number
- sieve marks multiplier of the prime number to true
- primes only collect number that is not mark as true, therefore, a prime number
*/

//fcc solution
//basic
function sumPrimes(num) {
  var res = 0;

  // Function to get the primes up to max in an array
  function getPrimes(max) {
    var sieve = [];
    var i;
    var j;
    var primes = [];
    for (i = 2; i <= max; ++i) {
      if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (j = i << 1; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }

    return primes;
  }

  // Add the primes
  var primes = getPrimes(num);
  for (var p = 0; p < primes.length; p++) {
    res += primes[p];
  }

  return res;
}

//intermediate
function sumPrimes(num) {
  // function to check if the number presented is prime
  function isPrime(number){
      for (i = 2; i <= number; i++){
          if(number % i === 0 && number!= i){
          // return true if it is divisible by any number that is not itself.
             return false;
          }
       }
       // if it passes the for loops conditions it is a prime
      return true;
  }
  // 1 is not a prime, so return nothing, also stops the recursive calls.
  if (num === 1){
    return 0;
  }
  // Check if your number is not prime
  if(isPrime(num) === false){
  // for non primes check the next number down from your maximum number, do not add anything to your answer
    return sumPrimes(num - 1);
  }

  // Check if your number is prime
  if(isPrime(num) === true){
  // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function.
    return num + sumPrimes(num - 1);
  }
}

//advance
function sumPrimes(num) {
  // step 1	
  let arr = Array.from({length: num+1}, (v, k) => k).slice(2); 
  // step 2
  let onlyPrimes = arr.filter( (n) => { 
    let m = n-1;
    while (m > 1 && m >= Math.sqrt(n)) { 
      if ((n % m) === 0) 
        return false;
        m--;
    }
      return true;
  });
  // step 3
  return onlyPrimes.reduce((a,b) => a+b); 
}
