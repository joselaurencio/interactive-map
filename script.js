// Initialize the map and set view to China/Mongolia region
var map = L.map('map').setView([40.0, 105.0], 4); // Adjust zoom for full view

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add markers with popups
var beijing = L.marker([39.9042, 116.4074]).addTo(map)
    .bindPopup("<b>Beijing, China 🇨🇳</b><br>Capital of China. Home to the Great Wall & Forbidden City.");

var shanghai = L.marker([31.2304, 121.4737]).addTo(map)
    .bindPopup("<b>Shanghai, China 🌆</b><br>China's largest city and financial hub.");

var ulanbator = L.marker([47.9186, 106.9176]).addTo(map)
    .bindPopup("<b>Ulaanbaatar, Mongolia 🇲🇳</b><br>Capital of Mongolia, famous for its cold winters and nomadic culture.");

var gobiDesert = L.marker([42.5, 105.0]).addTo(map)
    .bindPopup("<b>Gobi Desert 🏜️</b><br>A vast desert spanning China & Mongolia, known for its extreme climate.");
