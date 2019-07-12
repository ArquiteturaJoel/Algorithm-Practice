//1108. Defanging an IP Address
//https://leetcode.com/problems/defanging-an-ip-address/
//my solution
var defangIPaddr = function(address) {
    return address.split("").map(x=>(x==".")?"[.]":x).join("");
};

//my submission
//--Runtime: 56 ms, faster than 43.02% of JavaScript online submissions for Defanging an IP Address.
//--Memory Usage: 34 MB, less than 100.00% of JavaScript online submissions for Defanging an IP Address.

//How to improve?
//Only solution found is
var defangIPaddr = function(address) {
  return address.split('.').join('[.]');
};

//which is 
//--Runtime: 52 ms, faster than 71.37% of JavaScript online submissions for Defanging an IP Address.
//--Memory Usage: 34.1 MB, less than 100.00% of JavaScript online submissions for Defanging an IP Address.
