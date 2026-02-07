if (localStorage.getItem("admin") !== "true") {
  alert("Acceso denegado");
  window.location.href = "index.html";
}
