console.log("script.js cargado");

// BOTÓN CONTINUAR (CHARACTER)
const continueBtn = document.getElementById("continueBtn");

if (continueBtn) {
  continueBtn.addEventListener("click", () => {
    const nameInput = document.getElementById("name");
    const name = nameInput.value.trim();

    if (!name) {
      alert("Escribe un nombre");
      return;
    }

    localStorage.setItem("character", name);

    console.log("Personaje guardado:", name);

    // REDIRECCIÓN
    window.location.href = "combat.html";
  });
}
