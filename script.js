document.addEventListener("DOMContentLoaded", () => {
  // Initialize the map centered on the Korean Peninsula
  const map = L.map("map").setView([38.5, 127], 6);

  // Add OpenStreetMap tile layer
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 18
  }).addTo(map);

  // Define markers for various features
  const features = [
    { name: "Seoul (Capital of South Korea)", coords: [37.5665, 126.9780], color: "blue" },
    { name: "Pyongyang (Capital of North Korea)", coords: [39.0392, 125.7625], color: "red" },
    { name: "Taebaek Mountains", coords: [37.2, 128.9], color: "green" },
    { name: "Han River", coords: [37.55, 127.0], color: "aqua" },
    { name: "Yalu River", coords: [40.0, 124.3], color: "aqua" },
    { name: "Yellow Sea", coords: [36.0, 123.0], color: "purple" },
    { name: "Sea of Japan/East Sea", coords: [38.5, 132.0], color: "purple" },
  ];

  // Add circle markers with labels
  features.forEach(feature => {
    L.circleMarker(feature.coords, {
      radius: 8,
      color: feature.color,
      fillColor: feature.color,
      fillOpacity: 0.8
    }).addTo(map)
      .bindPopup(`<b>${feature.name}</b>`);
  });

  // Draw approximate border of Korea (simplified)
  const borderCoords = [
    [43.0, 130.0],
    [42.5, 129.5],
    [40.5, 128.5],
    [38.0, 126.0],
    [37.0, 125.5],
    [35.0, 129.5]
  ];
  L.polyline(borderCoords, {
    color: "yellow",
    weight: 3,
    dashArray: "10,6"
  }).addTo(map)
    .bindPopup("Approximate Border of the Korean Peninsula");

  // Add a polygon to represent a climate zone
  const climateZoneCoords = [
    [36.5, 127.0],
    [37.5, 128.5],
    [38.5, 127.5],
    [39.5, 126.0],
    [38.5, 124.5],
    [36.5, 125.0]
  ];
  L.polygon(climateZoneCoords, {
    color: "#00ffcc",
    fillColor: "#00ffcc",
    fillOpacity: 0.2
  }).addTo(map)
    .bindPopup("Temperate Climate Zone");

  // Example: Represent natural resources with a circle (e.g., mining region)
  L.circle([41.0, 129.0], {
    radius: 15000,
    color: "orange",
    fillColor: "orange",
    fillOpacity: 0.6
  }).addTo(map)
    .bindPopup("Iron & Coal Resources Region");
});
