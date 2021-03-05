var map = L.map('map').setView([53.34, -6.26], 4);

L.tileLayer('https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=ZK2Os6eoqo86I37zYlQO', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var ourIcon = L.icon({
    iconUrl: "https://i.imgur.com/CbAdhGo.png",
    iconSize: [35,45],
    iconAnchor: [20,30],
});

L.marker([53.345, -6.265],{icon:ourIcon}).addTo(map)
    .bindPopup('<img src="https://i.imgur.com/8ICyCUc.jpg" alt="userPhoto" class="userPic"><br>Welcome To They Think Its All Clover!<br>Scroll Out To View St.Patricks Tweets From<br>Around The World')
    .openPopup();
