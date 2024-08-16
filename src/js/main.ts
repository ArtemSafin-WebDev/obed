import "virtual:svg-icons-register";
import "../scss/style.scss";
import usefulArticlesSlider from "./usefulArticlesSlider";

import fancybox from "./fancybox";
import gallerySlider from "./gallerySlider";

document.addEventListener("DOMContentLoaded", () => {
  usefulArticlesSlider();

  fancybox();
  gallerySlider();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
