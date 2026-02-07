function enterPlayer() {
  window.location.href = "character.html";
}

function adminLogin() {
  const pass = prompt("Clave de administrador:");
  if (pass === "admin") {
    localStorage.setItem("admin", "true");
    window.location.href = "admin.html";
  } else {
    alert("Clave incorrecta");
  }
}

