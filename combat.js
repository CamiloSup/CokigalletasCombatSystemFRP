const character = localStorage.getItem("character");
const channel = localStorage.getItem("channel");
const role = localStorage.getItem("role") || "Guerrero";

const ROLES = {
  Guerrero: [
    { name: "Ataque fuerte", damage: 8, cooldown: 5000 },
    { name: "Defensa", damage: 0, cooldown: 3000 }
  ],
  Mago: [
    { name: "Bola de fuego", damage: 10, cooldown: 6000 },
    { name: "Escudo arcano", damage: 0, cooldown: 4000 }
  ]
};

document.getElementById("info").textContent =
  `${character} — ${role} — ${channel}`;

const actionsDiv = document.getElementById("actions");
let lastActionTime = 0;

ROLES[role].forEach(action => {
  const btn = document.createElement("button");
  btn.textContent = action.name;

  btn.onclick = () => {
    const now = Date.now();
    if (now - lastActionTime < action.cooldown) {
      alert("Cooldown activo");
      return;
    }

    lastActionTime = now;

    const roll = Math.floor(Math.random() * 20) + 1;

    const logText = `
*COMBAT_LOG*
*Channel:* _${channel}_
*Personaje:* _${character}_
*Rol:* _${role}_
*Acción:* _${action.name}_
*Tirada:* _${roll}_
*Daño:* _${action.damage}_
*Timestamp:* _${new Date().toLocaleString()}_
*COMBAT_LOG*
`.trim();

    const logs = JSON.parse(localStorage.getItem("logs") || "[]");
    logs.push(logText);
    localStorage.setItem("logs", JSON.stringify(logs));

    alert("Acción registrada");
  };

  actionsDiv.appendChild(btn);
});
