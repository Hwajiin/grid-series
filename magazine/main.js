const scrollUpBtn = document.querySelector(".scroll-up");

scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
