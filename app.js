function go(page) {
  document.body.classList.remove("fade");
  setTimeout(() => {
    location.href = page;
  }, 300);
}

function selectRole(role) {
  localStorage.setItem("role", role);
  go("combat.html");
}
