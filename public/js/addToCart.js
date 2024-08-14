document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (event) => {
    if (
      event.target.matches(".js-add-to-cart") ||
      event.target.closest(".js-add-to-cart")
    ) {
      event.preventDefault();
      const wrapper = event.target.closest(".js-add-to-cart-wrapper");
      wrapper.classList.add("active");
    }
  });
});
