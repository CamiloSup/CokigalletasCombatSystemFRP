function adminLogin() {
  const pass = prompt("Clave de administrador:");
  if (pass === "uchronia-admin") {
    localStorage.setItem("admin", "true");
    alert("Modo administrador activado");
  } else {
    alert("Clave incorrecta");
  }
}
