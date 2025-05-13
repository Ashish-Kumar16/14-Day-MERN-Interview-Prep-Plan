// 5. Write a function to deep-clone objects, preserving nested structures without `JSON.parse`.

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }
  const cloned = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
}

// Example usage:
const original = { a: 1, b: { c: 2, d: [3, 4] } };
const copy = deepClone(original);
copy.b.d[0] = 99;
console.log(original.b.d[0]); // 3 (original is unchanged)
