// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function likes which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// likes [] -- must be "no one likes this"
// likes ["Peter"] -- must be "Peter likes this"
// likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
// For 4 or more names, the number in and 2 others simply increases.

function likes(startArr) {
  if (startArr.length === 0) {
    return "no one likes this";
  } else if (startArr.length < 2) {
    return `${startArr[0]} likes this`;
  } else if (startArr.length < 3) {
    return `${startArr[0]} and ${startArr[1]} like this`;
  } else if (startArr.length < 4) {
    return `${startArr[0]}, ${startArr[1]} and ${startArr[2]} like this`;
  } else {
    return `${startArr[0]}, ${startArr[1]} and ${
      startArr.length - 2
    } others like this`;
  }
}
