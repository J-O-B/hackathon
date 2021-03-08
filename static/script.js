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

let map = L.map('map').setView([53.34, -6.26], 4);

L.tileLayer('https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=ZK2Os6eoqo86I37zYlQO', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let ourIcon = L.icon({
    iconUrl: "../static/pin.png",
    iconSize: [30,40],
    iconAnchor: [20,30],
});

//Dublin
L.marker([53.349804, -6.260310],{icon:ourIcon}).addTo(map)
    .bindPopup('<img src="https://res.cloudinary.com/cjcon90/image/upload/v1615137776/they_think_its_all_clover/8ICyCUc.jpg" alt="userPhoto" class="userPic"><br>Welcome To They Think Its All Clover!<br>Scroll Out To View St.Patricks Tweets From<br>Around The World')    
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
            let link = $(this).find('.link').val();

            if ((lat.charAt(1) == "0") || (lat.charAt(1) == "1") || (lat.charAt(1) == "2") || (lat.charAt(1) == "3") || (lat.charAt(1) == "4") || (lat.charAt(1) == "5") || (lat.charAt(1) == "6") || (lat.charAt(1) == "7") || (lat.charAt(1) == "8")  || (lat.charAt(1) == "9")){
                L.marker([lat, long],{icon:ourIcon}).addTo(map)
                .bindPopup(`<img src="${pic}" alt="userPhoto" class="userPic"><br><strong><a href="${link}" target="_blank">${name}</a></strong><br><em>${message}</em>`);
            }else{
                // Pass
            }
        });
    });
}

$('#expandMap').click(function(){
    $('#map').css("height", "650px");
});
$('#smallMap').click(function(){
    $('#map').css("height", "25rem");
});