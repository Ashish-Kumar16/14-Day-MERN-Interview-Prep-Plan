// 4. Implement a “Back to Top” button that appears after scrolling down 200px.

// Example HTML (for reference):
// <button id="backToTop" style="display:none;position:fixed;bottom:20px;right:20px;">Back to Top</button>

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("backToTop");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

