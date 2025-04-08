document.addEventListener("DOMContentLoaded", () => {
  const map = L.map("map").setView([38.5, 127], 6);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 18,
  }).addTo(map);

  const locations = [
    { name: "Seoul (Capital of South Korea)", coords: [37.5665, 126.9780], iconColor: "blue" },
    { name: "Pyongyang (Capital of North Korea)", coords: [39.0392, 125.7625], iconColor: "red" },
    { name: "Taebaek Mountains", coords: [37.2, 128.9], iconColor: "green" },
    { name: "Han River", coords: [37.55, 127.0], iconColor: "aqua" },
    { name: "Yalu River", coords: [40.3, 124.2], iconColor: "aqua" },
    { name: "Yellow Sea", coords: [36.0, 123.0], iconColor: "purple" },
    { name: "Sea of Japan / East Sea", coords: [38.5, 132.0], iconColor: "purple" },
  ];

  locations.forEach((loc) => {
    const marker = L.circleMarker(loc.coords, {
      radius: 8,
      color: loc.iconColor,
      fillColor: loc.iconColor,
      fillOpacity: 0.8
    }).addTo(map);

    marker.bindPopup(`<b>${loc.name}</b>`);
  });

  // Borders (simplified polyline)
  const borderCoords = [
    [43.0, 130.0], [42.5, 129.5], [40.5, 128.5],
    [38.0, 126.0], [37.0, 125.5], [35.0, 129.5]
  ];
  L.polyline(borderCoords, {
    color: "yellow",
    weight: 3,
    dashArray: "10, 6"
  }).addTo(map).bindPopup("Approximate Border Area");

  // Climate Zones (Shaded polygon)
  const climateZone = [
    [36.5, 127.0], [37.5, 128.5], [38.5, 127.5], [39.5, 126.0], [38.5, 124.5], [36.5, 125.0]
  ];
  L.polygon(climateZone, {
    color: "#00ffcc",
    fillColor: "#00ffcc",
    fillOpacity: 0.2
  }).addTo(map).bindPopup("Temperate Climate Zone");

  // Natural Resources (icon representation)
  L.circle([41.0, 129.0], {
    radius: 15000,
    color: "orange",
    fillColor: "orange",
    fillOpacity: 0.6
  }).addTo(map).bindPopup("Iron & Coal Resources");

  L.circle([36.5, 128.0], {
    radius: 15000,
    color: "lime",
    fillColor: "lime",
    fillOpacity: 0.6
  }).addTo(map).bindPopup("Agricultural Zone");
});
