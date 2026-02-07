const character = localStorage.getItem("character");
const channel = localStorage.getItem("channel");
const role = localStorage.getItem("role");

const ROLES = {
  Guerrero: [
    { name: "Ataque fuerte", damage: 8, cooldown: 5000 }
  ],
  Mago: [
    { name: "Bola de fuego", damage: 10, cooldown: 6000 }
  ]
};

const info = document.getElementById("info");
const actions = document.getElementById("actions");
const logsBox = document.getElementById("playerLogs");

info.textContent = `${character} — ${role} — ${channel}`;

let last = 0;

ROLES[role].forEach(action => {
  const btn = document.createElement("button");
  btn.textContent = action.name;

  btn.onclick = () => {
    const now = Date.now();
    if (now - last < action.cooldown) return alert("Cooldown activo");
    last = now;

    const roll = Math.floor(Math.random() * 20) + 1;

    const log = {
      channel,
      text: `
*COMBAT_LOG*
${character} (${role})
Acción: ${action.name}
Tirada: ${roll}
Daño: ${action.damage}
${new Date().toLocaleString()}
*COMBAT_LOG*
`.trim()
    };

    const logs = JSON.parse(localStorage.getItem("logs") || "[]");
    logs.push(log);
    localStorage.setItem("logs", JSON.stringify(logs));

    renderPlayerLogs();
  };

  actions.appendChild(btn);
});

function renderPlayerLogs() {
  logsBox.innerHTML = "";
  const logs = JSON.parse(localStorage.getItem("logs") || "[]")
    .filter(l => l.channel === channel);

  logs.forEach(l => {
    const pre = document.createElement("pre");
    pre.textContent = l.text;
    logsBox.appendChild(pre);
  });
}

renderPlayerLogs();
