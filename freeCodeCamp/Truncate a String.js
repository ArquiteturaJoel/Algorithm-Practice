/*
Truncate a String
- Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.
- truncateString("Peter Piper picked a peck of pickled peppers", 11) should return "Peter Piper...".
- truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) 
should return "A-tisket a-tasket A green and yellow basket".
- truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) 
should return "A-tisket a-tasket A green and yellow basket".
*/

//my solution
function truncateString(str, num) {
  // Clear out that junk in your trunk     
 return (str.length <= num)? str :  str.split("")
              .splice(0,num)
              .join("")
              +"..."
}

//fcc solution
//basic
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num && num > 3) {
    return str.slice(0, (num - 3)) + '...';
  } else if (str.length > num && num <= 3) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }

}

//advance
function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }
}
