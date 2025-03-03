// Initialize the map and set view to China/Mongolia region
var map = L.map('map').setView([40.0, 105.0], 4); // Adjust zoom for full view

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker
var marker = L.marker([29.4241, -98.4936]).addTo(map)
    .bindPopup("Hello, San Antonio!")
    .openPopup();
