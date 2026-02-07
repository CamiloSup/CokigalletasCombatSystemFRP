const logsDiv = document.getElementById("logs");
const logs = JSON.parse(localStorage.getItem("logs") || "[]");

if (logs.length === 0) {
  logsDiv.textContent = "No hay registros";
}

logs.forEach(log => {
  const box = document.createElement("pre");
  box.textContent = log;
  box.style.userSelect = "text";
  logsDiv.appendChild(box);
});
