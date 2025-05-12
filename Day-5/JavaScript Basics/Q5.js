// 5. Return common elements from two arrays
// Sample Input: [1, 2, 3, 4] and [3, 4, 5, 6]
// Expected Output: [3, 4]

function commonElements(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        // Check if already in result to avoid duplicates
        let alreadyAdded = false;
        for (let k = 0; k < result.length; k++) {
          if (result[k] === arr1[i]) {
            alreadyAdded = true;
            break;
          }
        }
        if (!alreadyAdded) {
          result.push(arr1[i]);
        }
      }
    }
  }
  return result;
}

// Example usage:
console.log(commonElements([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]
