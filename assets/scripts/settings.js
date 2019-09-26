function closeWindow() {
  document.getElementById("settingsOptions").style.display = "none";
  document.getElementById("blurredBackground").style.display = "none";
  document.getElementById("background").style.backgroundColor = "transparent";
  // document.body.style.position = "static";
}

function openWindow() {
  document.getElementById("settingsOptions").style.display = "initial";
  document.getElementById("blurredBackground").style.display = "initial";
  document.getElementById("background").style.backgroundColor = "rgba(255, 255, 255, 0.8)";
  // document.body.style.position = "fixed";
}