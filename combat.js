const character = localStorage.getItem("character");
const channel = localStorage.getItem("channel");

if (!character || !channel) {
  alert("Datos incompletos");
  window.location.href = "index.html";
}

document.getElementById("title").textContent =
  `${character} — ${channel}`;

function doAction(action) {
  const roll = Math.floor(Math.random() * 20) + 1;
  const damage = Math.floor(Math.random() * 6) + 1;
  const time = Date.now();
  const hash = btoa(character + action + time).slice(0, 8);

  const log = {
    character,
    action,
    roll,
    damage,
    time,
    hash
  };

  const logs = JSON.parse(localStorage.getItem("combat_logs") || "[]");
  logs.push(log);
  localStorage.setItem("combat_logs", JSON.stringify(logs));

  alert("Acción registrada");
}
