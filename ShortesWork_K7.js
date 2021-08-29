// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  let arr = s.split(" ");

  const shorter = (left, right) => (left.length <= right.length ? left : right);

  return arr.reduce(shorter).length;
}
