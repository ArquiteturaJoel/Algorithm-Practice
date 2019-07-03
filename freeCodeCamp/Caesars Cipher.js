/*
Caesars Cipher
- One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
- A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
- Write a function which takes a ROT13 encoded string as input and returns a decoded string.
- All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
- rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP
*/

//my solution
function rot13(str) { // LBH QVQ VG!
//ASCII value: A(65)-Z(90)
    let ascii;
    return str
    .split("")
    .map(x=>{
        ascii = x.charCodeAt(0);
        if(ascii>=65&&ascii<=90){
            if(ascii-13>=65){
            ascii-=13;
            }else if(ascii-13<=90){
            ascii+=13;
            }
        }
        return String.fromCharCode(ascii);
    })
    .join("");
}

//fcc solution
//basic
function rot13(str) {
  // Split str into a character array
  return str.split('')
  // Iterate over each character in the array
    .map.call(str, function(char) {
      // Convert char to a character code
      x = char.charCodeAt(0);
      // Checks if character lies between A-Z
      if (x < 65 || x > 90) {
        return String.fromCharCode(x);  // Return un-converted character
      }
      //N = ASCII 78, if the character code is less than 78, shift forward 13 places
      else if (x < 78) {
        return String.fromCharCode(x + 13);
      }
      // Otherwise shift the character 13 places backward
      return String.fromCharCode(x - 13);
    }).join('');  // Rejoin the array into a string
}

//intermediate
// Solution with Regular expression and Array of ASCII character codes
function rot13(str) {
  var rotCharArray = [];
  var regEx = /[A-Z]/ ;
  str = str.split("");
  for (var x in str) {
    if (regEx.test(str[x])) {
      // A more general approach
      // possible because of modular arithmetic
      // and cyclic nature of rot13 transform
      rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65);
    } else {
      rotCharArray.push(str[x].charCodeAt());
    }
  }
  str = String.fromCharCode.apply(String, rotCharArray);
  return str;
}

//advance
function rot13(str) { // LBH QVQ VG!
  return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
}
