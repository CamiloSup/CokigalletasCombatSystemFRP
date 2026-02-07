function enterPlayer() {
  window.location.href = "channel.html";
}

function selectChannel(channel) {
  localStorage.setItem("channel", channel);
  window.location.href = "character.html";
}

function saveName() {
  const name = document.getElementById("name").value.trim();
  if (!name) {
    alert("Escribe un nombre");
    return;
  }
  localStorage.setItem("character", name);
  window.location.href = "combat.html";
}

function enterAdmin() {
  const pass = prompt("Clave de administrador");
  if (pass === "admin") {
    localStorage.setItem("admin", "true");
    window.location.href = "admin.html";
  } else {
    alert("Clave incorrecta");
  }
}
