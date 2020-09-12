var dataUrl = 'data/hh_combo.csv';
var maxZoom = 12;
var fieldSeparator = ';';
var baseUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var baseAttribution = 'Data, imagery and map information provided by <a href="http://open.mapquest.co.uk" target="_blank">MapQuest</a>, <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> and contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a>';
var subdomains = 'abc';
var clusterOptions = {showCoverageOnHover: false, maxClusterRadius: 50};
var labelColumn = "name";
var opacity = 1.0;
var myIcon = L.icon({
    iconUrl: 'img/moon.png',
    iconSize: [20, 20],
    iconAnchor: [10, 10]
});

