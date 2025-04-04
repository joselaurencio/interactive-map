// Initialize the map and set view over the Korean Peninsula
var map = L.map('map').setView([38.5, 127.5], 6);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Markers for major mountains
var mountains = [
    { name: "Taebaek Mountains", lat: 37.5, lng: 128.3 },
    { name: "Baekdu Mountain", lat: 41.8, lng: 128.1 }
];

mountains.forEach(mountain => {
    L.marker([mountain.lat, mountain.lng])
        .addTo(map)
        .bindPopup(`<b>${mountain.name}</b>`);
});

// Markers for rivers
var rivers = [
    { name: "Han River", lat: 37.57, lng: 126.98 },
    { name: "Yalu River", lat: 40.0, lng: 124.3 }
];

rivers.forEach(river => {
    L.marker([river.lat, river.lng])
        .addTo(map)
        .bindPopup(`<b>${river.name}</b>`);
});

// Borders & neighboring countries (Outline for Korea)
var koreaBorder = [
    [43.0, 130.0], [42.5, 129.5], [40.5, 128.5], [38.0, 126.0], [37.0, 125.5], [35.0, 129.5]
];

L.polygon(koreaBorder, {
    color: 'red',
    weight: 2,
    fillOpacity: 0
}).addTo(map).bindPopup("Border of North & South Korea");

// Capitals
var capitals = [
    { name: "Seoul (South Korea)", lat: 37.5665, lng: 126.9780 },
    { name: "Pyongyang (North Korea)", lat: 39.0194, lng: 125.7381 }
];

capitals.forEach(capital => {
    L.marker([capital.lat, capital.lng], { icon: L.icon({ iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', iconSize: [30, 30] }) })
        .addTo(map)
        .bindPopup(`<b>${capital.name}</b>`);
});

// Bodies of water
var bodiesOfWater = [
    { name: "Yellow Sea", lat: 36.5, lng: 123.5 },
    { name: "Sea of Japan (East Sea)", lat: 39.0, lng: 132.0 }
];

bodiesOfWater.forEach(water => {
    L.marker([water.lat, water.lng])
        .addTo(map)
        .bindPopup(`<b>${water.name}</b>`);
});
