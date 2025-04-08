document.addEventListener("DOMContentLoaded", () => {
  const map = L.map("map").setView([38, 127], 6); // Korean Peninsula

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 18,
  }).addTo(map);
});
