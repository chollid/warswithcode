// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(numbers) {
  let newStr = numbers.join("");

  let finalNum = `(${newStr.substr(0, 3)}) ${newStr.substr(
    3,
    3
  )}-${newStr.substr(6, 4)}`;

  return finalNum;
}
