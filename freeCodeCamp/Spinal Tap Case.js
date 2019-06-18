/*
Spinal Tap Case
- Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
- spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
- spinalCase("AllThe-small Things") should return "all-the-small-things".
*/

//my solution: couldn't figure out how to do the low-space-uppercase
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g,'$1 $2');
  str = str.replace(/[_-]/g," ")
  str = str.split(" ").join("-").toLowerCase();
  return str;
}

//fcc solution
//basic
function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}

//intermediate
function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // Split on whitespace and underscores and join with dash
  return str.toLowerCase().split(/(?:_| )+/) .join('-');
}

//advance
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
}
