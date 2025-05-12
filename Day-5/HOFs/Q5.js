// 5. Build an ES module exporting utility functions, then import and use them in another script.

export function add(a, b) {
  return a + b;
}
export function multiply(a, b) {
  return a * b;
}


import { add, multiply } from "./utils.js";

console.log(add(2, 3)); // 5
console.log(multiply(4, 5)); // 20
