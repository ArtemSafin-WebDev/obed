document.addEventListener("DOMContentLoaded", () => {
  const elements = Array.from(document.querySelectorAll(".js-reviews-slider"));
  const mql = window.matchMedia("(max-width: 768px)");
  elements.forEach((element) => {
    const container = element.querySelector(".swiper");
    if (!container) return;

    const options = {
      slidesPerView: 1,
      speed: 600,
      autoHeight: true,
      spaceBetween: 30,
      loop: true,
      navigation: {
        prevEl: element.querySelector(".reviews__slider-arrow--prev"),
        nextEl: element.querySelector(".reviews__slider-arrow--next"),
      },
    };

    let instance = null;

    const handleWidthChange = (e) => {
      if (e.matches) {
        if (instance) instance.destroy();
        instance = new Swiper(container, options);
      } else {
        if (instance) instance.destroy();
        instance = new Swiper(container, {
          ...options,
          slidesPerView: 2,
          spaceBetween: 30,
          autoHeight: false,
        });
      }
    };

    mql.addEventListener("change", handleWidthChange);

    handleWidthChange(mql);
  });
});
