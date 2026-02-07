console.log("combat.js cargado");

const character = localStorage.getItem("character");
const channel = localStorage.getItem("channel");

if (!character || !channel) {
  alert("Faltan datos del personaje o channel");
  window.location.href = "index.html";
}

const title = document.getElementById("title");
if (title) {
  title.textContent = `${character} — ${channel}`;
}

function doAction(action) {
  console.log("Acción:", action);

  const roll = Math.floor(Math.random() * 20) + 1;
  const damage = Math.floor(Math.random() * 6) + 1;

  const log = {
    character: character,
    channel: channel,
    action: action,
    roll: roll,
    damage: damage,
    time: new Date().toISOString()
  };

  const logs = JSON.parse(localStorage.getItem("combat_logs") || "[]");
  logs.push(log);
  localStorage.setItem("combat_logs", JSON.stringify(logs));

  alert("Acción registrada correctamente");
}
