document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm("service_hqqanhz", "template_jo0bpx7", form)
      .then(() => {
        alert("Message sent successfully!");
        form.reset();
      })
      .catch((error) => {
        alert("Failed to send: " + JSON.stringify(error));
      });
  });
});




