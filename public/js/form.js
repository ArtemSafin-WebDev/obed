document.addEventListener("DOMContentLoaded", () => {
  const someForm = document.querySelector("#some-form");
  someForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if ($(someForm).parsley().isValid()) {
      // AJAX
    }
  });
});
