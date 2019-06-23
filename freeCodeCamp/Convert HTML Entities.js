/*
Convert HTML Entities
- Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
- convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
*/

//my solution: used the fcc solution I learned in DNA pairing :)
function convertHTML(str) {
  // &colon;&rpar;
  var pairs = {
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':'&quot;',
    "'":"&apos;"
  }
  //split string into array
  let result = str.split("");
  //map and replace character
  result.map(function(x){
    if(pairs.hasOwnProperty(x)){
      result.splice(result.indexOf(x),1,pairs[x]);
    }
  }
  )
  //join string back
  result = result.join("");
  return result;
}

//fcc solution
// basic
function convertHTML(str) {
  // Split by character to avoid problems.

  var temp = str.split('');

  // Since we are only checking for a few HTML elements I used a switch

  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case '<':
        temp[i] = '&lt;';
        break;
      case '&':
        temp[i] = '&amp;';
        break;
      case '>':
        temp[i] = '&gt;';
        break;
      case '"':
        temp[i] = '&quot;';
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }

  temp = temp.join('');
  return temp;
}
    
//intermediate
function convertHTML(str) {
//Chaining of replace method with different arguments
  str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
return str;
}

//advance
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  htmlEntities={
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    '\'':"&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str.split('').map(entity => htmlEntities[entity] || entity).join('');
}
