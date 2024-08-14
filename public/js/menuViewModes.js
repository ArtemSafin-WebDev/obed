document.addEventListener("DOMContentLoaded", () => {
  const viewModes = document.querySelector(".menu__view-modes");
  if (!viewModes) return;

  const btns = Array.from(viewModes.querySelectorAll(".menu__view-mode"));

  btns.forEach((btn, btnIndex) =>
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      btns.forEach((btn) => btn.classList.remove("active"));
      btn.classList.add("active");
      if (btnIndex === 0) {
        document.body.classList.add("menu-list-mode");
        document.body.classList.remove("menu-grid-mode");
      } else {
        document.body.classList.remove("menu-list-mode");
        document.body.classList.add("menu-grid-mode");
      }
    })
  );
});
