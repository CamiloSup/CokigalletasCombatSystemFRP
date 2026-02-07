function enterPlayer() {
  window.location.href = "character.html";
}

function adminLogin() {
  const pass = prompt("Clave de administrador:");
  if (pass === "admin") {
    localStorage.setItem("admin", "true");
    alert("Modo administrador activado");
  } else {
    alert("Clave incorrecta");
  }
}
