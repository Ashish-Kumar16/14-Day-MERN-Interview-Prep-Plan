// 2. Create a tab-switcher UI in vanilla JS that shows and hides content sections.

// Example HTML structure (for reference):
// <div class="tabs">
//   <button class="tab" data-tab="1">Tab 1</button>
//   <button class="tab" data-tab="2">Tab 2</button>
//   <button class="tab" data-tab="3">Tab 3</button>
// </div>
// <div class="tab-content" data-tab="1">Content 1</div>
// <div class="tab-content" data-tab="2">Content 2</div>
// <div class="tab-content" data-tab="3">Content 3</div>

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  function showTab(tabNumber) {
    contents.forEach((content) => {
      if (content.getAttribute("data-tab") === tabNumber) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      showTab(tab.getAttribute("data-tab"));
    });
  });

  // Show the first tab by default
  if (tabs.length > 0) {
    showTab(tabs[0].getAttribute("data-tab"));
  }
});
