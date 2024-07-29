export default function menu() {
  const burger = document.querySelector<HTMLButtonElement>(
    ".page-header__burger"
  );
  if (!burger) return;

  burger.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.toggle("mobile-menu-open");
  });
}
