// 3. Traverse a list of items via JS and add a CSS class to every even-indexed element.

// Example HTML structure (for reference):
// <ul id="itemList">
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
//   <li>Item 4</li>
// </ul>

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll("#itemList li");
  for (let i = 0; i < items.length; i++) {
    if (i % 2 === 0) {
      items[i].classList.add("even-item");
    }
  }
});
