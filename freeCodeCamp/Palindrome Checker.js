/*
Palindrome Checker
- Return true if the given string is a palindrome. Otherwise, return false.
- A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
- Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) 
and turn everything into the same case (lower or upper case) in order to check for palindromes.
- palindrome("1 eye for of 1 eye.") should return false.
*/

//my solution
function palindrome(str) {
  // Good luck!
  let check = str.replace(/_|\W/ig,"").toLowerCase().split("");
  let index,character=check.length-1;
  for(index=0;index<check.length;index++){
    console.log(check[index]);
    //console.log(check[character]);
    if(check[index]!=check[character]){
      return false;
    }
    character--;
  }
  return true;
}

//fcc solution
// basic
function palindrome(str) {
  return str.replace(/[\W_]/g, '').toLowerCase() ===
         str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

//intermediate
function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, '');
  for(var i = 0, len = str.length - 1; i < len/2; i++) {
    if(str[i] !== str[len-i]) {
      return false;
    }
  }
  return true;
}

//advance
//this solution performs at minimum 7x better, at maximum infinitely better.
//read the explanation for the reason why. I just failed this in an interview.
function palindrome(str) {
  //assign a front and a back pointer
  let front = 0
  let back = str.length - 1

  //back and front pointers won't always meet in the middle, so use (back > front)
  while (back > front) {
    //increments front pointer if current character doesn't meet criteria
    if ( str[front].match(/[\W_]/) ) {
      front++
      continue
    }
    //decrements back pointer if current character doesn't meet criteria
    if ( str[back].match(/[\W_]/) ) {
      back--
      continue
    }
    //finally does the comparison on the current character
    if ( str[front].toLowerCase() !== str[back].toLowerCase() ) return false
    front++
    back--
  }

  //if the whole string has been compared without returning false, it's a palindrome!
  return true

    }
