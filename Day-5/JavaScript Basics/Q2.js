// Q2: Flatten a nested array (1 level deep)
// Sample Input: [1, [2, 3], 4, [5, 6]]
// Expected Output: [1, 2, 3, 4, 5, 6]

function flattenOneLevel(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        result.push(arr[i][j]);
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

// Example usage:
console.log(flattenOneLevel([1, [2, 3], 4, [5, 6]])); // [1, 2, 3, 4, 5, 6]
