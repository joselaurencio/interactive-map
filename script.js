document.addEventListener("DOMContentLoaded", () => {
  // Create a basic map centered over the Korean Peninsula
  const map = L.map("map").setView([38.5, 127], 6);
  
  // Add OpenStreetMap tile layer
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 18,
  }).addTo(map);
  
  // Add a single marker for testing
  L.marker([37.5665, 126.9780]).addTo(map)
    .bindPopup("<b>Seoul</b>")
    .openPopup();
});
