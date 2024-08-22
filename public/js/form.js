document.addEventListener("DOMContentLoaded", () => {
  const forms = Array.from(document.querySelectorAll(".js-form"));

  forms.forEach((form) => {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if ($(form).parsley().isValid()) {
        const url = form.action;
        fetch(url, {
          method: "POST",
          body: new FormData(form),
        })
          .then((response) => {
            Promise.resolve();

            // if (!response.ok) {
            //   throw new Error("Something went wrong");
            // }
            // return response.json();
          })
          .then((data) => {
            console.log(data);
            Array.from(document.querySelectorAll(".js-modal")).forEach(
              (modal) => modal.classList.remove("active")
            );
            const successModal = document.querySelector("#success-modal");
            successModal.classList.add("active");
            document.body.classList.add("modal-open");
          })
          .catch((error) => {
            const errorModal = document.querySelector("#error-modal");
            errorModal.classList.add("active");
            Array.from(document.querySelectorAll(".js-modal")).forEach(
              (modal) => modal.classList.remove("active")
            );
            document.body.classList.add("modal-open");
            console.log(error);
          });
      }
    });
  });
});
