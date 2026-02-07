function go(page) {
  window.location.href = page;
}

function setChannel(channel) {
  localStorage.setItem("channel", channel);
  go("character.html");
}

function saveCharacter() {
  const name = document.getElementById("name").value.trim();
  if (!name) {
    alert("Pon un nombre");
    return;
  }
  localStorage.setItem("character", name);
  go("combat.html");
}

function attack() {
  const log = {
    channel: localStorage.getItem("channel"),
    character: localStorage.getItem("character"),
    roll: Math.floor(Math.random() * 20) + 1
  };

  const logs = JSON.parse(localStorage.getItem("logs") || "[]");
  logs.push(log);
  localStorage.setItem("logs", JSON.stringify(logs));

  alert("Ataque registrado");
}

const info = document.getElementById("info");
if (info) {
  info.textContent =
    localStorage.getItem("character") +
    " — " +
    localStorage.getItem("channel");
}

const logsBox = document.getElementById("logs");
if (logsBox) {
  logsBox.textContent = localStorage.getItem("logs") || "Sin logs";
}
