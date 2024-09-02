document.addEventListener("DOMContentLoaded", () => {
  const wrappers = Array.from(
    document.querySelectorAll(".js-add-to-cart-wrapper")
  );
  const controller = new AbortController();
  const signal = controller.signal;

  wrappers.forEach((wrapper) => {
    const input = wrapper.querySelector('input[type="number"]');
    const addToCartBtn = wrapper.querySelector(".js-add-to-cart");
    input.addEventListener("change", async () => {
      console.log("Input change", input.value);
      if (Number(input.value) === 0) {
        try {
          const response = await fetch("/", { signal });
          if (!response.ok) throw new Error("Error when adding to cart");
          wrapper.classList.remove("active");
        } catch (err) {
          console.log(err);
          return;
        }
      }
    });

    addToCartBtn.addEventListener("click", async (event) => {
      event.preventDefault();
      try {
        const response = await fetch("/", { signal });
        if (!response.ok) throw new Error("Error when adding to cart");
        input.value = 1;
        wrapper.classList.add("active");
      } catch (err) {
        console.log(err);
        return;
      }
    });
  });
});
