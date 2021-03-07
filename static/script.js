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
    iconAnchor: [20,30],
});

//Dublin
L.marker([53.349804, -6.260310],{icon:ourIcon}).addTo(map)
    .bindPopup('<img src="https://i.imgur.com/8ICyCUc.jpg" alt="userPhoto" class="userPic"><br>Welcome To They Think Its All Clover!<br>Scroll Out To View St.Patricks Tweets From<br>Around The World')
    .openPopup();
    /*
//London
let londonlat = 51.50
let londonlong = 0.13
L.marker([londonlat, londonlong],{icon:ourIcon}).addTo(map)
    .bindPopup('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/St_Patrick%27s_Day_-_Trafalgar_Square_March_2006.jpg/220px-St_Patrick%27s_Day_-_Trafalgar_Square_March_2006.jpg" alt="userPhoto" class="userPic"><br>Trafalgar Square');
//Floriana Malta
L.marker([35.89, 14.50],{icon:ourIcon}).addTo(map)
    .bindPopup('<img src="https://malta.intercontinental.com/wp-content/uploads/2018/03/St-Patricks-Day-Celebrations-In-Valletta.jpg" alt="userPhoto" class="userPic"><br>Floriana Malta');
//Moscow
L.marker([55.75, 37.62],{icon:ourIcon}).addTo(map)
    .bindPopup('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/St_Patrick%27s_Day_2012_in_Moscow.jpg/220px-St_Patrick%27s_Day_2012_in_Moscow.jpg" alt="userPhoto" class="userPic"><br>Moscow');
//Sarajevo
L.marker([43.85, 18.41],{icon:ourIcon}).addTo(map)
    .bindPopup('<img src="" alt="userPhoto" class="userPic"><br>Sarajevo');
//Scotland
L.marker([55.862, -4.251],{icon:ourIcon}).addTo(map)
    .bindPopup('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Stpatricksdayfestivalcbridge.JPG/220px-Stpatricksdayfestivalcbridge.JPG" alt="userPhoto" class="userPic"><br>Scotland');
//Lithuania
L.marker([54.68, 25.28],{icon:ourIcon}).addTo(map)
    .bindPopup('<img src="" alt="userPhoto" class="userPic"><br>Lithuania');
//Tokyo
L.marker([35.68, 139.76],{icon:ourIcon}).addTo(map)
    .bindPopup('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Saint_Patricks_Day_in_Motomachi_Yokohama.jpg/220px-Saint_Patricks_Day_in_Motomachi_Yokohama.jpg" alt="userPhoto" class="userPic"><br>Tokyo');
//Cheonggyecheon
L.marker([37.57, 126.97],{icon:ourIcon}).addTo(map)
    .bindPopup('<img src="" alt="userPhoto" class="userPic"><br>Cheonggyecheon');
//Selangor
L.marker([3.07, 101.51],{icon:ourIcon}).addTo(map)
    .bindPopup('<img src="" alt="userPhoto" class="userPic"><br>Selangor');*/

var count = $('.coordinates').length

var i;
for (i = 0; i < count; i++) {
    $(this).css("background", "red");
}
$('.coordinates').each(function(){
    let lat = $(this).find('.lat').val();
    let long = $(this).find('.long').val();
    let pic = $(this).find('.pic').val();
    let message = $(this).find('.tweet').val();
    let name = $(this).find('.name').val();
    L.marker([lat, long],{icon:ourIcon}).addTo(map)
    .bindPopup(`<img src="${pic}" alt="userPhoto" class="userPic"><br><strong>${name}</strong><br><em>${message}</em>`);
});


$('#tweetBtn').click(function(){
    $('.tweetdata').hide(1000);
    $('.tweetCard').show(2000);
})

$('#backBtn').click(function(){
    $('.tweetCard').hide(1000);
    $('.tweetdata').show(2000);
})