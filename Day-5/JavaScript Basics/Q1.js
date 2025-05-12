// Q1: Check if two strings are anagrams of each other
// Sample Input: "listen" and "silent"
// Expected Output: true

function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  const count1 = {};
  const count2 = {};

  for (let i = 0; i < str1.length; i++) {
    count1[str1[i]] = (count1[str1[i]] || 0) + 1;
    count2[str2[i]] = (count2[str2[i]] || 0) + 1;
  }

  // Compare frequency counters
  for (let char in count1) {
    if (count1[char] !== count2[char]) {
      return false;
    }
  }
  return true;
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false
