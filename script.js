// Initialize the map and set view to China/Mongolia region
var map = L.map('map').setView([40.0, 105.0], 4); // Adjust zoom for full view

// Add OpenStreetMap tiles - Dark mode map style
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://carto.com/">CARTO</a>'
}).addTo(map);

// Add markers with popups
var locations = [
    { lat: 39.9042, lon: 116.4074, name: "Beijing, China 🇨🇳", desc: "Capital of China. Home to the Great Wall, Forbidden City, and Tiananmen Square." },
    { lat: 31.2304, lon: 121.4737, name: "Shanghai, China 🌆", desc: "China's largest city and financial hub." },
    { lat: 47.9186, lon: 106.9176, name: "Ulaanbaatar, Mongolia 🇲🇳", desc: "Capital of Mongolia, famous for its cold winters and nomadic culture." },
    { lat: 42.5, lon: 105.0, name: "Gobi Desert 🏜️", desc: "A vast desert spanning China & Mongolia, known for its extreme climate." },
    { lat: 40.68, lon: 117.23, name: "Great Wall of China 🏯", desc: "One of the greatest wonders of the world." },
    { lat: 39.915, lon: 116.404, name: "Forbidden City 🏯", desc: "China’s former imperial palace, a UNESCO World Heritage site." },
    { lat: 39.9087, lon: 116.3975, name: "Tiananmen Square 🇨🇳", desc: "The largest public square in the world, rich with history." },
    { lat: 39.8822, lon: 116.4066, name: "Temple of Heaven ⛩", desc: "A Taoist temple where emperors once prayed for good harvests." },
    { lat: 40.4319, lon: 116.5704, name: "Great Wall - Mutianyu 🏯", desc: "A scenic and less crowded section of the Great Wall." },
    { lat: 39.9996, lon: 116.2755, name: "Summer Palace 🌊", desc: "A historic imperial garden blending cultural history and natural beauty." },
    { lat: 39.9406, lon: 116.4179, name: "Lama Temple ⛩", desc: "A Tibetan Buddhist temple with stunning architecture." },
    { lat: 48.036, lon: 107.1610, name: "Terelj National Park ⛰", desc: "Famous for its rock formations, wildlife, and scenic landscapes." },
    { lat: 47.7994, lon: 106.9182, name: "Sukhbaatar Square 🇲🇳", desc: "The central square of Ulaanbaatar, named after Mongolia’s revolutionary hero." },
    { lat: 47.915, lon: 106.917, name: "National Museum of Mongolia 🏛", desc: "A museum showcasing Mongolian history, including the Mongol Empire." },
    { lat: 47.7100, lon: 106.4323, name: "Khustain Nuruu National Park 🐴", desc: "Home to the rare Przewalski’s horse and beautiful steppe landscapes." }
];

// Add markers to the map
locations.forEach(loc => {
    L.marker([loc.lat, loc.lon]).addTo(map)
        .bindPopup(`<b>${loc.name}</b><br>${loc.desc}`);
});
