// 2. Build a memoization wrapper for CPU-intensive functions.

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      return cache[key];
    }
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

// Example usage:
function slowAdd(a, b) {
    for (let i = 0; i < 1e8; i++) {}
    return a + b;
}
const memoizedAdd = memoize(slowAdd);
console.log(memoizedAdd(2, 3)); // Calculates and caches
console.log(memoizedAdd(2, 3)); // Returns cached result
