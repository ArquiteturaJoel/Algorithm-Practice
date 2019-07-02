/*
Make a Person
- Fill in the object constructor with the following methods below:

getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)

- Run the tests to see the expected output for each method.
- The methods that take an argument must accept only one argument and it has to be a string.
- These methods must be the only available means of interacting with the object.
- bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell")
*/

//my solution
var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return firstAndLast;
  };

  this.setFullName  = function(newFullName){
    firstAndLast = newFullName;
  }

  this.getFirstName = function(){
    return firstAndLast.split(" ").slice(0,1).join(" ");
  }

  this.setFirstName = function(newFirstName){
    firstAndLast = newFirstName.concat(" "+this.getLastName());
  }

  this.getLastName = function(){
    return firstAndLast.split(" ").slice(1).join(" ");
  }
  
  this.setLastName = function(newLastName){
    firstAndLast = this.getFirstName().concat(" "+ newLastName);
  }
  
};

//fcc solution
//basic
  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};
