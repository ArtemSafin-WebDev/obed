document.addEventListener("DOMContentLoaded", () => {
  const elements = Array.from(
    document.querySelectorAll(".menu__business-slider")
  );

  const initSlider = (element) => {
    const container = element.querySelector(".swiper");
    if (!container) return;
    new Swiper(container, {
      slidesPerView: "auto",
      speed: 600,
      navigation: {
        prevEl: element.querySelector(
          ".menu__business-slider-arrow:first-child"
        ),
        nextEl: element.querySelector(
          ".menu__business-slider-arrow:last-child"
        ),
      },
      pagination: {
        el: element.querySelector(".menu__business-slider-pagination"),
        type: "bullets",
        clickable: true,
      },
    });
  };

  elements.forEach((element) => initSlider(element));

  if (!window.obedApi) {
    window.obedApi = {};
  }
  window.obedApi.initBusinessSlider = initSlider;
});
