const backToTopBtn = document.getElementById("back-to-top-btn");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > window.innerHeight / 2) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}