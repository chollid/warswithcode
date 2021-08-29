// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  newStr = "";
  for (let i = 0; i < s.length; i++) {
    let strIndex = i;

    newStr += `${s[i].toUpperCase()}${s[i].toLowerCase().repeat(strIndex)}-`;
  }
  finalStr = newStr.substr(0, newStr.length - 1);
  return finalStr;
}
