// Q3: Find the longest word in a given sentence
// Sample Input: "The quick brown fox jumps"
// Expected Output: "jumps"

function findLongestWord(sentence) {
  let words = [];
  let word = "";
  // Split sentence into words without using split()
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      if (word.length > 0) {
        words.push(word);
        word = "";
      }
    } else {
      word += sentence[i];
    }
  }
  if (word.length > 0) {
    words.push(word);
  }

  let longest = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

// Example usage:
console.log(findLongestWord("The quick brown fox jumps")); // "jumps"
