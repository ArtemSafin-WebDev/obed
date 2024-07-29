import "virtual:svg-icons-register";
import "../scss/style.scss";
import usefulArticlesSlider from "./usefulArticlesSlider";
import reviewsSlider from "./reviewsSlider";
import menu from "./menu";
import partnersSlider from "./partnersSlider";

document.addEventListener("DOMContentLoaded", () => {
  menu();
  usefulArticlesSlider();
  reviewsSlider();
  partnersSlider();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
