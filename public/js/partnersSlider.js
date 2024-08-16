document.addEventListener("DOMContentLoaded", () => {
  const elements = Array.from(document.querySelectorAll(".js-partners-slider"));
  const mql = window.matchMedia("(max-width: 768px)");
  elements.forEach((element) => {
    const container = element.querySelector(".swiper");
    if (!container) return;

    const options = {
      slidesPerView: 2,
      speed: 600,
      autoHeight: true,
      spaceBetween: 10,
      loop: true,
      navigation: {
        prevEl: element.querySelector(".partners__slider-arrow--prev"),
        nextEl: element.querySelector(".partners__slider-arrow--next"),
      },
    };

    let instance = null;

    const handleWidthChange = (e) => {
      if (e.matches) {
        if (instance) instance.destroy();
        instance = new Swiper(container, {
          ...options,
          breakpoints: {
            641: {
              slidesPerView: 4,
              spaceBetween: 12,
            },
          },
        });
      } else {
        if (instance) instance.destroy();

        const newOptions = {
          ...options,
          slidesPerView: 6,
          spaceBetween: 50,
          autoHeight: false,
        };

        console.log("New options", newOptions);
        instance = new Swiper(container, newOptions);
      }
    };

    mql.addEventListener("change", handleWidthChange);

    handleWidthChange(mql);
  });
});
