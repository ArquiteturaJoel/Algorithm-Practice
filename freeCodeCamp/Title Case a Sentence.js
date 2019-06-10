/*
Title Case a Sentence
- Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
- titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
- titleCase("sHoRt AnD sToUt") should return Short And Stout.
*/

//my solution
function titleCase(str) {
  //split and lower case
  str=str.toLowerCase().split(" ");
  //loop through word
  let word;
  for(let i =0;i<str.length;i++){
    //loop through character
    word = str[i].split("")
    for(let j =0;j<word.length;j++){
      if(j==0){
        word[j] = word[j].toUpperCase();
      }      
      str[i] = word.join("");
    }
  }
  str = str.join(" ");
  return str;
}

//fcc solution
//basic
String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
};

function titleCase(str) {
    var newTitle = str.split(' ');
    var updatedTitle = [];
    for (var st in newTitle) {
        updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
    }
    return updatedTitle.join(' ');
}

//intermediate
function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val){
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

//advance
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}
