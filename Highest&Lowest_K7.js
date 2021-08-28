// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(string) {
  let newString = string.split(" ");
  let arr = Array.from(newString);

  let numArr = arr.map((num) => +num);

  let largest = numArr[0];
  let smallest = numArr[0];
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] >= largest) {
      largest = numArr[i];
      // console.log(`Largest: ${largest}`)
    }
    if (numArr[i] <= smallest) {
      smallest = numArr[i];
      // console.log(`Smallest: ${smallest}`)
    }
  }
  let final = largest + "" + " " + (smallest + "");

  return final;
}
