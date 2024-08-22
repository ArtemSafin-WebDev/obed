document.addEventListener("DOMContentLoaded", () => {
  const wrappers = Array.from(
    document.querySelectorAll(".js-add-to-cart-wrapper")
  );

  wrappers.forEach((wrapper) => {
    const input = wrapper.querySelector('input[type="number"]');
    const addToCartBtn = wrapper.querySelector(".js-add-to-cart");
    input.addEventListener("change", () => {
      console.log("Input change", input.value);
      if (Number(input.value) === 0) {
        wrapper.classList.remove("active");
      }
    });

    addToCartBtn.addEventListener("click", (event) => {
      event.preventDefault();
      input.value = 1;
      wrapper.classList.add("active");
    });
  });
});
