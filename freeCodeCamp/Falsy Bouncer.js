/*
Falsy Bouncer
- Remove all falsy values from an array.
- Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
- Hint: Try converting each value to a Boolean
- bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
*/

//my solution 
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  let result=[];
  //loop through arr
  for(let i =0; i<arr.length;i++){
    //push true element to result
    if(arr[i]){
      result.push(arr[i]);  
    }
  }
  return result;
}

//fcc solution
//advance
function bouncer(arr) {
  return arr.filter(Boolean);
}
