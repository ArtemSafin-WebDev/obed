import "virtual:svg-icons-register";
import "../scss/style.scss";
import usefulArticlesSlider from "./usefulArticlesSlider";
import reviewsSlider from "./reviewsSlider";
import menu from "./menu";
import partnersSlider from "./partnersSlider";
import fancybox from "./fancybox";
import gallerySlider from "./gallerySlider";

document.addEventListener("DOMContentLoaded", () => {
  menu();
  usefulArticlesSlider();
  reviewsSlider();
  partnersSlider();
  fancybox();
  gallerySlider();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
