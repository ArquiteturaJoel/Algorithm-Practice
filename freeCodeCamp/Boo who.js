/*
Boo who
- Check if a value is classified as a boolean primitive. Return true or false. Boolean primitives are true and false.
- booWho(1) should return false.
- booWho(true) should return true.
- booWho(false) should return true.
*/

//my solution
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return ((bool==true | bool==false)==1 && typeof(bool)!="number")? true : false;
}

//fcc solution
//basic
function booWho(bool) {
  return typeof bool === 'boolean';
}
