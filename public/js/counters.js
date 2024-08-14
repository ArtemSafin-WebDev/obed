document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (event) => {
    if (
      event.target.matches(".counter__btn--minus") ||
      event.target.closest(".counter__btn--minus")
    ) {
      event.preventDefault();
      const counter = event.target.closest(".counter");
      const min = counter.hasAttribute("data-min")
        ? counter.getAttribute("data-min")
        : 1;
      const input = counter.querySelector("input");

      if (+input.value - 1 < min) {
        return;
      }
      input.value = +input.value - 1;

      const changeEvent = new Event("change");
      input.dispatchEvent(changeEvent);
    }

    if (
      event.target.matches(".counter__btn--plus") ||
      event.target.closest(".counter__btn--plus")
    ) {
      console.log("Plus click");
      event.preventDefault();
      const counter = event.target.closest(".counter");
      const max = counter.hasAttribute("data-max")
        ? counter.getAttribute("data-max")
        : null;
      const input = counter.querySelector("input");

      if (counter.hasAttribute("data-max") && +input.value + 1 > max) {
        return;
      }
      input.value = +input.value + 1;
      const changeEvent = new Event("change");
      input.dispatchEvent(changeEvent);
    }
  });
});
