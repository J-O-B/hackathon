$( document ).ready(function() {
    $('.tweetCard').hide();
    $('#coordinates').hide();
    $('.lat').hide();
    $('.long').hide();
    $("#myModal").modal('show');
});
// Stop Modal Video If Still Playing On Close
$("#myModal").on('hidden.bs.modal', function (e) {
    $("#myModal iframe").attr("src", $("#myModal iframe").attr("src"));
});

var map = L.map('map').setView([53.34, -6.26], 4);

L.tileLayer('https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=ZK2Os6eoqo86I37zYlQO', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var ourIcon = L.icon({
    iconUrl: "https://i.imgur.com/CbAdhGo.png",
    iconSize: [35,45],
    iconAnchor: [20,35],
});

//Dublin
L.marker([53.349804, -6.260310],{icon:ourIcon}).addTo(map)
    .bindPopup('<img src="https://i.imgur.com/8ICyCUc.jpg" alt="userPhoto" class="userPic"><br>Welcome To They Think Its All Clover!<br>Scroll Out To View St.Patricks Tweets From<br>Around The World')
    .openPopup();
//London
L.marker([51.50, 0.13],{icon:ourIcon}).addTo(map)
    .bindPopup(`<img src="https://traveljee.com/wp-content/uploads/2016/03/St-Patricks-Day-London-600x399.jpg" alt="userPhoto class ="userPic"><br><strong>London</strong>`);
//Floriana Malta
L.marker([35.89, 14.50],{icon:ourIcon}).addTo(map)
.bindPopup(`<img src="https://archive.lovinmalta.com/images/uploads/2019/03/_blogWide/28944159_10215694282820133_2026537199_o.jpg?mtime=20190317103738" alt="userPhoto class ="userPic"><br><strong>Floriana</strong>`);
//Moscow
L.marker([55.75, 37.62],{icon:ourIcon}).addTo(map)
.bindPopup(`<img src="https://i.pinimg.com/originals/7c/2c/bb/7c2cbb56d8bf79d3b32835122db69bb5.jpg" alt="userPhoto class ="userPic"><br><strong>Moscow</strong>`);
//Sarajevo
L.marker([43.85, 18.41],{icon:ourIcon}).addTo(map)
.bindPopup(`<img src="" alt="userPhoto class ="userPic"><br><strong>Sarajevo</strong>`);
//Scotland
L.marker([55.862, -4.251],{icon:ourIcon}).addTo(map)
.bindPopup(`<img src="" alt="userPhoto class ="userPic"><br><strong>London</strong>`);
//Lithuania
L.marker([54.68, 25.28],{icon:ourIcon}).addTo(map)
.bindPopup(`<img src="" alt="userPhoto class ="userPic"><br><strong>London</strong>`);
//Tokyo
L.marker([35.68, 139.76],{icon:ourIcon}).addTo(map)
.bindPopup(`<img src="" alt="userPhoto class ="userPic"><br><strong>London</strong>`);
//Cheonggyecheon
L.marker([37.57, 126.97],{icon:ourIcon}).addTo(map)
.bindPopup(`<img src="" alt="userPhoto class ="userPic"><br><strong>London</strong>`);
//Selangor
L.marker([3.07, 101.51],{icon:ourIcon}).addTo(map)
.bindPopup(`<img src="" alt="userPhoto class ="userPic"><br><strong>London</strong>`);

var count = $("#coordinates").children().length;

var i;
for (i = 0; i < count; i++) {
    $(this).css("background", "red");
}
$('#coordinates').each(function(){
    marker();
});
function marker(){
    $('#coordinates').each(function(){
    let lat = $(this).find('.lat').val();
    let long = $(this).find('.long').val();
    let pic = $(this).find('.pic').val();
    let message = $(this).find('.tweet').val();
    let name = $(this).find('.name').val();

    console.log(typeof lat)
    console.log(typeof long)
    L.marker([lat, long],{icon:ourIcon}).addTo(map)
    .bindPopup(`<img src="${pic}" alt="userPhoto" class="userPic"><br><strong>${name}</strong><br><em>${message}</em>`);
    });
}


$('#tweetBtn').click(function(){
    $('.tweetdata').hide(1000);
    $('.tweetCard').show(2000);
})

$('#backBtn').click(function(){
    $('.tweetCard').hide(1000);
    $('.tweetdata').show(2000);
})