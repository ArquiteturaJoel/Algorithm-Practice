/*
Roman Numeral Converter
- Convert the given number into a roman numeral.
- All roman numerals answers should be provided in upper-case.
- convertToRoman(83) should return "LXXXIII"
*/

//my solution
function convertToRoman(num) {
let current=num,roman=[],temp,keys;
let pairs = {
    1:"I",
    4:"IV",
    5:"V",
    9:"IX",
    10:"X",
    40:"XL",
    50:"L",
    90:"XC",
    100:"C",
    400:"CD",
    500:"D",
    900:"CM",
    1000:"M"
}
//loop through keys
keys = Object.keys(pairs);
while(current>0){
    //find the higest x that can be subtract from current, store in temp
    keys.forEach(x=>{
    if(current>=x){
        temp = x;
    }
    });
    //subtract tmp from current and push its roman numeral to roman
    roman.push(pairs[temp]);
    current-=temp;
}
return roman.join("");
}

//fcc solution
//basic
var convertToRoman = function(num) {

  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var romanized = '';

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
}

//intermediate
function convertToRoman(num) {
 var romans = ["I", "V", "X", "L", "C", "D", "M"],
     ints = [],
     romanNumber = [],
     numeral = "";
  while (num) {
    ints.push(num % 10);
    num = Math.floor(num/10);
  }
  for (i=0; i<ints.length; i++){
      units(ints[i]);
  }
  function units(){
    numeral = romans[i*2];
    switch(ints[i]) {
      case 1:
        romanNumber.push(numeral);
        break;
      case 2:
        romanNumber.push(numeral.concat(numeral));
        break;
      case 3:
        romanNumber.push(numeral.concat(numeral).concat(numeral));
        break;
      case 4:
        romanNumber.push(numeral.concat(romans[(i*2)+1]));
        break;
      case 5:
        romanNumber.push(romans[(i*2)+1]);
        break;
      case 6:
        romanNumber.push(romans[(i*2)+1].concat(numeral));
        break;
      case 7:
        romanNumber.push(romans[(i*2)+1].concat(numeral).concat(numeral));
        break;
      case 8:
        romanNumber.push(romans[(i*2)+1].concat(numeral).concat(numeral).concat(numeral));
        break;
      case 9:
        romanNumber.push(romans[i*2].concat(romans[(i*2)+2]));
      }
    }
  return romanNumber.reverse().join("").toString();
}

//advance
function convertToRoman(num) {
  var romans = 
  // 10^i 10^i*5
    ["I", "V"], // 10^0
    ["X", "L"], // 10^1
    ["C", "D"], // 10^2
    ["M"]       // 10^3
  ],
      digits = num.toString()
        .split('')
        .reverse()
        .map(function(item, index) {
          return parseInt(item);
        }),
      numeral = "";

  // Loop through each digit, starting with the ones place
  for (var i=0; i<digits.length; i++) {
    // Make a Roman numeral that ignores 5-multiples and shortening rules
    numeral = romans[i][0].repeat(digits[i]) + numeral;
    // Check for a Roman numeral 5-multiple version
    if (romans[i][1]) {
      numeral = numeral
        // Change occurrences of 5 * 10^i to the corresponding 5-multiple Roman numeral
        .replace(romans[i][0].repeat(5), romans[i][1])
        // Shorten occurrences of 9 * 10^i
        .replace(romans[i][1] + romans[i][0].repeat(4), romans[i][0] + romans[i+1][0])
        // Shorten occurrences of 4 * 10^i
        .replace(romans[i][0].repeat(4), romans[i][0] + romans[i][1]);
    }
  }

  return numeral;
}
