document.addEventListener("DOMContentLoaded", () => {
  const mobileProfile = document.querySelector(".page-header__mobile-profile");

  if (mobileProfile) {
    const button = mobileProfile.querySelector(
      ".page-header__mobile-profile-btn"
    );
    button.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.remove("mobile-menu-open");
      mobileProfile.classList.toggle("shown");
    });

    document.addEventListener("click", (event) => {
      if (mobileProfile.contains(event.target)) return;
      mobileProfile.classList.remove("shown");
    });
  }
  const burger = document.querySelector(".page-header__burger");
  if (!burger) return;

  burger.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.toggle("mobile-menu-open");
  });
});
