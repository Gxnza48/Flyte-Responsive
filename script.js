document.addEventListener("DOMContentLoaded", function () {
    const contactPanel = document.getElementById("contact-panel");
    const contactForm = document.getElementById("contact-form");
  
    // Muestra el panel de contacto al hacer clic en "Contact Us"
    document
      .querySelectorAll("li a[href='#contact-panel']")
      .forEach((element) => {
        element.addEventListener("click", function (e) {
          e.preventDefault();
          contactPanel.style.display = "block";
        });
      });
  
    // Cierra el panel de contacto al hacer clic en "Submit"
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      contactPanel.style.display = "none";
      // Agregar aquí el código para procesar el formulario si es necesario
    });
  });
  
  function toggleMenu() {
    const mobileMenu = document.querySelector(".mobile-links");
  
    if (!mobileMenu.style.height || mobileMenu.style.height === "0px") {
      mobileMenu.style.height = "240px";
    } else {
      mobileMenu.style.height = 0;
    }
  }
  