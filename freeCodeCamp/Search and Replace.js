/*
Search and Replace
- Perform a search and replace on the sentence using the arguments provided and return the new sentence.
- First argument is the sentence to perform the search and replace on.
- Second argument is the word that you will be replacing (before).
- Third argument is what you will be replacing the second argument with (after).
- Preserve the case of the first character in the original word when you are replacing it. 
For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
- myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".
*/

//my solution
function myReplace(str, before, after) {
  //capitalize after if before does
  if(before[0] === before[0].toUpperCase()){
    after = after.replace(after[0],after[0].toUpperCase());
  }
  str = str.replace(before,after);
  return str;
}

//fcc solution
//basic
function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);

  return str;
}

//intermediate
function myReplace(str, before, after) {
//Create a regular expression object
  var re = new RegExp(before,"gi");
//Check whether the first letter is uppercase or not
  if(/[A-Z]/.test(before[0])){
  //Change the word to be capitalized
    after = after.charAt(0).toUpperCase()+after.slice(1);
     }
     //Replace the original word with new one
  var  newStr =  str.replace(re,after);

 return newStr;
}

//advance
function myReplace(str, before, after) {

    // create a function that will change the casing of any number of letter in parameter "target"
    // matching parameter "source"
    function applyCasing(source, target) {
        // split the source and target strings to array of letters
        var targetArr = target.split("");
        var sourceArr = source.split("");
        // iterate through all the items of sourceArr and targetArr arrays till loop hits the end of shortest array
        for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++){
            // find out the casing of every letter from sourceArr using regular expression
            // if sourceArr[i] is upper case then convert targetArr[i] to upper case
            if (/[A-Z]/.test(sourceArr[i])) {
                targetArr[i] = targetArr[i].toUpperCase();
            }
            // if sourceArr[i] is not upper case then convert targetArr[i] to lower case
            else targetArr[i] = targetArr[i].toLowerCase();
        }
        // join modified targetArr to string and return
        return (targetArr.join(""));
    }

    // replace "before" with "after" with "before"-casing
    return str.replace(before, applyCasing(before, after));
}

//2
// Add new method to the String object, not overriding it if one exists already
String.prototype.capitalize =  String.prototype.capitalize ||
    function() {
        return this[0].toUpperCase() + this.slice(1);
    };

const Util = (function () {
// Create utility module to hold helper functions
    function textCase(str, tCase) {
        // Depending if the tCase argument is passed we either set the case of the
        // given string or we get it.
        // Those functions can be expanded for other text cases.
        
        if(tCase) {
            return setCase(str, tCase);
        } else {
            return getCase(str);
        }

        function setCase(str, tCase) {
            switch(tCase) {
                case "uppercase": return str.toUpperCase();
                case "lowercase": return str.toLowerCase();
                case "capitalized": return str.capitalize();
                default: return str;
            }
        }

        function getCase(str) {
            if (str === str.toUpperCase()) { return "uppercase"; }
            if (str === str.toLowerCase()) { return "lowercase"; }
            if (str === str.capitalize()) { return "capitalized"; }
            return "normal";
        }
    }

    return {
        textCase
    };
})();

function myReplace(str, before, after) {
    const { textCase } = Util;
    const regex = new RegExp(before, 'gi');
    const replacingStr = textCase(after, textCase(before));

    return str.replace(regex, replacingStr);
}
