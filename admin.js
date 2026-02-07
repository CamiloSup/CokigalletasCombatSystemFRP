// Seguridad básica
if (localStorage.getItem("admin") !== "true") {
  alert("Acceso denegado");
  window.location.href = "index.html";
}

const logsContainer = document.getElementById("logs");

// logs guardados
const logs = JSON.parse(localStorage.getItem("combat_logs") || "[]");

if (logs.length === 0) {
  logsContainer.innerHTML = "<p>No hay registros aún.</p>";
}

logs.forEach(log => {
  const box = document.createElement("div");
  box.className = "log-box";

  box.textContent = `
*COMBAT_LOG*
*Personaje:* _${log.character}_
*Acción:* _${log.action}_
*Tirada:* _${log.roll}_
*Daño:* _${log.damage}_
*Timestamp:* _${log.time}_
*Hash:* _${log.hash}_
*COMBAT_LOG*
  `.trim();

  const btn = document.createElement("button");
  btn.textContent = "Copiar";
  btn.onclick = () => {
    navigator.clipboard.writeText(box.textContent);
    btn.textContent = "Copiado ✔";
    setTimeout(() => btn.textContent = "Copiar", 1500);
  };

  logsContainer.appendChild(box);
  logsContainer.appendChild(btn);
});
