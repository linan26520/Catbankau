function setLanguage(lang) {
  alert("Language set to: " + lang);
}
function login() {
  const username = document.getElementById("username").value;
  alert("Logging in as " + username);
}
function register() {
  const username = document.getElementById("username").value;
  alert("Registering new user: " + username);
}
function goToSlot() {
  window.location.href = "slot.html";
}
function goToLeaderboard() {
  window.location.href = "leaderboard.html";
}