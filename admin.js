const ADMIN_PASSWORD = "admin123";
const pass = prompt("Contraseña admin:");

if (pass !== ADMIN_PASSWORD) {
  alert("Acceso denegado");
  location.href = "index.html";
}

const logs = JSON.parse(localStorage.getItem("logs") || "[]");
const container = document.getElementById("logs");

const grouped = {};

logs.forEach(l => {
  if (!grouped[l.channel]) grouped[l.channel] = [];
  grouped[l.channel].push(l.text);
});

Object.keys(grouped).forEach(channel => {
  const h = document.createElement("h3");
  h.textContent = "Channel: " + channel;
  container.appendChild(h);

  grouped[channel].forEach(text => {
    const pre = document.createElement("pre");
    pre.textContent = text;
    container.appendChild(pre);
  });
});
