// Initialize the map and set view to a specific location (latitude, longitude)
var map = L.map('map').setView([29.4241, -98.4936], 10); // San Antonio, TX

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker
var marker = L.marker([29.4241, -98.4936]).addTo(map)
    .bindPopup("Hello, San Antonio!")
    .openPopup();
