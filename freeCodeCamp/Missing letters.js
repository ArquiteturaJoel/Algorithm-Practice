/*
- Missing lettersFind the missing letter in the passed letter range and return it.
- If all letters are present in the range, return undefined.
- fearNotLetter("bcdf") should return "e".
- fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
*/

//my solution
function fearNotLetter(str) {
  let result;
  for(let i =0;i<str.length;i++){
    if(str.charCodeAt(i+1)-str.charCodeAt(i)!=1){
      result = str.charCodeAt(i)+1;
      break;
    }
  }
  if(result>=97&&result<=122||result>=65&&result<=90){
    return String.fromCharCode(result);
  }else{
    return undefined;
  }
}

//fcc solution
//basic
function fearNotLetter(str) {

  for(var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
    hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {

      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }  
  }
  return undefined;
}

//intermediate
// Adding this solution for the sake of avoiding using 'for' and 'while' loops.
// See the explanation for reference as to why. It's worth the effort.

function fearNotLetter(str) {
  var compare = str.charCodeAt(0), missing;

  str.split('').map(function(letter,index) {
    if (str.charCodeAt(index) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

//advance
function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}

//2 
function fearNotLetter(str) {
  var allChars = '';
  var notChars = new RegExp('[^'+str+']','g');

  for (var i = 0; allChars[allChars.length-1] !== str[str.length-1] ; i++)
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

  return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined;
}
