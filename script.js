function enterPlayer() {
  window.location.href = "character.html";
}

function enterAdmin() {
  const pass = prompt("Clave de administrador");
  if (pass === "admin") {
    localStorage.setItem("admin", "true");
    window.location.href = "admin.html";
  } else {
    alert("Clave incorrecta");
  }
}

function saveName() {
  const name = document.getElementById("name").value.trim();
  if (!name) {
    alert("Escribe un nombre");
    return;
  }
  localStorage.setItem("character", name);
  alert("Personaje guardado");
}
