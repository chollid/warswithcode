// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let arr = []; //declare 1st array
  let arr2 = []; //declare 2nd array

  //set up for loop to push 'x' and 'o' to its specific arr
  for (let i = 0; i < str.length; i++) {
    str[i].toLowerCase() === "x" && arr.push(arr[i]);
    str[i].toLowerCase() === "o" && arr2.push(arr[i]);
  }
  //set bool to variable
  let lengthIsEqual = arr.length === arr2.length ? true : false;

  //return answer
  return lengthIsEqual;
}
