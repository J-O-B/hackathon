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
    iconSize: [30,40],
    iconAnchor: [20,30],
});

//Dublin
L.marker([53.349804, -6.260310],{icon:ourIcon}).addTo(map)
    .bindPopup('<img src="https://i.imgur.com/8ICyCUc.jpg" alt="userPhoto" class="userPic"><br>Welcome To They Think Its All Clover!<br>Scroll Out To View St.Patricks Tweets From<br>Around The World')
    .openPopup();

$('#coordinates').each(function(){
    marker();
});
function marker(){
    $('#coordinates').each(function(){
        $('.coordinates').each(function(){
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