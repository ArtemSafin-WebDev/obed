document.addEventListener("DOMContentLoaded", () => {
  const scrollUp = document.querySelector(".page-footer__scroll-up");

  const checkBtn = () => {
    if (window.scrollY >= window.innerHeight) {
      scrollUp.classList.remove("hidden");
    } else {
      scrollUp.classList.add("hidden");
    }
  };

  window.addEventListener("scroll", checkBtn);
  window.addEventListener("resize", checkBtn);

  checkBtn();
});
