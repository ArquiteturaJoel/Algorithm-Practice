/*
Everything Be True
- Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
- In other words, you are given an array collection of objects. 
The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
- truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") 
should return false.
*/

//my solution: reduntant, if x[pre] is true, x.hasOwnProperty(pre) is true
function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(x=>x.hasOwnProperty(pre)&&x[pre]);
}

//fcc solution
//basic
function truthCheck(collection, pre) {
  // Create a counter to check how many are true.
  var counter = 0;
  // Check for each object
  for (var c in collection) {
    // If it is has property and value is truthy
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  return counter == collection.length;
}

//intermediate
function truthCheck(collection, pre) {
  return collection.every(function (element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

//advance
function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(obj => obj[pre]);
}
