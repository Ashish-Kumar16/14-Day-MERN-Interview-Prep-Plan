// 1. Write a debounce function and apply it to an input’s `keyup` event for live searching.

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
function liveSearch(event) {
  console.log("Searching for:", event.target.value);
}

const input = document.getElementById("searchInput");
if (input) {
  input.addEventListener("keyup", debounce(liveSearch, 300));
}
