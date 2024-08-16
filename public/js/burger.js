document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".page-header__burger");
  if (!burger) return;

  burger.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.toggle("mobile-menu-open");
  });
});
